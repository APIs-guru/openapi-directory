import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudtasksProjectsLocationsQueuesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesSetIamPolicyPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: CloudtasksProjectsLocationsQueuesSetIamPolicySecurity;
}
export declare class CloudtasksProjectsLocationsQueuesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
