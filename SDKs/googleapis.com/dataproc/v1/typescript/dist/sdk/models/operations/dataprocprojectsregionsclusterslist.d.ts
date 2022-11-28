import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsClustersListPathParams extends SpeakeasyBase {
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsClustersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataprocProjectsRegionsClustersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsClustersListRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsClustersListPathParams;
    queryParams: DataprocProjectsRegionsClustersListQueryParams;
    security: DataprocProjectsRegionsClustersListSecurity;
}
export declare class DataprocProjectsRegionsClustersListResponse extends SpeakeasyBase {
    contentType: string;
    listClustersResponse?: shared.ListClustersResponse;
    statusCode: number;
}
