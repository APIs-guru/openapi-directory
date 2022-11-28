import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContainerProjectsLocationsClustersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    zone?: string;
}
export declare class ContainerProjectsLocationsClustersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersListRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersListPathParams;
    queryParams: ContainerProjectsLocationsClustersListQueryParams;
    security: ContainerProjectsLocationsClustersListSecurity;
}
export declare class ContainerProjectsLocationsClustersListResponse extends SpeakeasyBase {
    contentType: string;
    listClustersResponse?: shared.ListClustersResponse;
    statusCode: number;
}
