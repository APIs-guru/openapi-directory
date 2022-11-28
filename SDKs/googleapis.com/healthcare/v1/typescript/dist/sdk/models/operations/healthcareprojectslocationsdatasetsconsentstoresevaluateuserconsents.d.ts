import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsPathParams extends SpeakeasyBase {
    consentStore: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsQueryParams;
    request?: shared.EvaluateUserConsentsRequest;
    security: HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsResponse extends SpeakeasyBase {
    contentType: string;
    evaluateUserConsentsResponse?: shared.EvaluateUserConsentsResponse;
    statusCode: number;
}
