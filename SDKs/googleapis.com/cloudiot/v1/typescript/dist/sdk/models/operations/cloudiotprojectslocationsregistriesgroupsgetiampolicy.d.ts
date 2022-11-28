import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
