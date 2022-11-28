import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyQueryParams;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicySecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
