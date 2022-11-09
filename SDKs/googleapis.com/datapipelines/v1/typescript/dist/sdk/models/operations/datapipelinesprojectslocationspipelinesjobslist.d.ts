import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatapipelinesProjectsLocationsPipelinesJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatapipelinesProjectsLocationsPipelinesJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatapipelinesProjectsLocationsPipelinesJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatapipelinesProjectsLocationsPipelinesJobsListRequest extends SpeakeasyBase {
    pathParams: DatapipelinesProjectsLocationsPipelinesJobsListPathParams;
    queryParams: DatapipelinesProjectsLocationsPipelinesJobsListQueryParams;
    security: DatapipelinesProjectsLocationsPipelinesJobsListSecurity;
}
export declare class DatapipelinesProjectsLocationsPipelinesJobsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatapipelinesV1ListJobsResponse?: shared.GoogleCloudDatapipelinesV1ListJobsResponse;
    statusCode: number;
}
