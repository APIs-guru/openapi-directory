import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudtasksProjectsLocationsQueuesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesGetIamPolicyPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: CloudtasksProjectsLocationsQueuesGetIamPolicySecurity;
}
export declare class CloudtasksProjectsLocationsQueuesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
