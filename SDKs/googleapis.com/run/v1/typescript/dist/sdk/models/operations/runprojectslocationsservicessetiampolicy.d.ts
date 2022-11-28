import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class RunProjectsLocationsServicesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsServicesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesSetIamPolicyPathParams;
    queryParams: RunProjectsLocationsServicesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: RunProjectsLocationsServicesSetIamPolicySecurity;
}
export declare class RunProjectsLocationsServicesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
