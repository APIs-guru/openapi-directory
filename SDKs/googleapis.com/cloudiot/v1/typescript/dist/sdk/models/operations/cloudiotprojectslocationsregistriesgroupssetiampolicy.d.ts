import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
