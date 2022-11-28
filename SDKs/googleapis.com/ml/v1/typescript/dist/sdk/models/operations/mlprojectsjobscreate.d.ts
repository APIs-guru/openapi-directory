import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsJobsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MlProjectsJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsJobsCreateRequest extends SpeakeasyBase {
    pathParams: MlProjectsJobsCreatePathParams;
    queryParams: MlProjectsJobsCreateQueryParams;
    request?: shared.GoogleCloudMlV1JobInput;
    security: MlProjectsJobsCreateSecurity;
}
export declare class MlProjectsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1Job?: shared.GoogleCloudMlV1Job;
    statusCode: number;
}
