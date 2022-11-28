import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsJobsListQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsJobsListSecurity extends SpeakeasyBase {
    option1?: MlProjectsJobsListSecurityOption1;
    option2?: MlProjectsJobsListSecurityOption2;
}
export declare class MlProjectsJobsListRequest extends SpeakeasyBase {
    pathParams: MlProjectsJobsListPathParams;
    queryParams: MlProjectsJobsListQueryParams;
    security: MlProjectsJobsListSecurity;
}
export declare class MlProjectsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1ListJobsResponse?: shared.GoogleCloudMlV1ListJobsResponse;
    statusCode: number;
}
