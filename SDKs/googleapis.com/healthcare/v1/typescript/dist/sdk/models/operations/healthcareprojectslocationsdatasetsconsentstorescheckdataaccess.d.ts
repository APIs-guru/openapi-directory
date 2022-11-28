import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessPathParams extends SpeakeasyBase {
    consentStore: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessQueryParams;
    request?: shared.CheckDataAccessRequest;
    security: HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessResponse extends SpeakeasyBase {
    checkDataAccessResponse?: shared.CheckDataAccessResponse;
    contentType: string;
    statusCode: number;
}
