import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesResumePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtasksProjectsLocationsQueuesResumeQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesResumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesResumeRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesResumePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesResumeQueryParams;
    request?: Map<string, any>;
    security: CloudtasksProjectsLocationsQueuesResumeSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesResumeResponse extends SpeakeasyBase {
    contentType: string;
    queue?: shared.Queue;
    statusCode: number;
}
