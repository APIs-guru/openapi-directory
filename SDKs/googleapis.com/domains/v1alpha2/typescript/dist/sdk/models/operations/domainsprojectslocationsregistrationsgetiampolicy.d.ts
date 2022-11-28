import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DomainsProjectsLocationsRegistrationsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsGetIamPolicyPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsGetIamPolicyQueryParams;
    security: DomainsProjectsLocationsRegistrationsGetIamPolicySecurity;
}
export declare class DomainsProjectsLocationsRegistrationsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
