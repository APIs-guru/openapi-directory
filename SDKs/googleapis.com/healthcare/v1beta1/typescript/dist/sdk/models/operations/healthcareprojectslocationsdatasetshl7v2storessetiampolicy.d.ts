import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicySecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
