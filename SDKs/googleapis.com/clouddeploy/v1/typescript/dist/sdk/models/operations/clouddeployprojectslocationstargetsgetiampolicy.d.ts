import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsTargetsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ClouddeployProjectsLocationsTargetsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouddeployProjectsLocationsTargetsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsTargetsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsTargetsGetIamPolicyPathParams;
    queryParams: ClouddeployProjectsLocationsTargetsGetIamPolicyQueryParams;
    security: ClouddeployProjectsLocationsTargetsGetIamPolicySecurity;
}
export declare class ClouddeployProjectsLocationsTargetsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
