import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams;
    request?: shared.ConsentArtifact;
    security: HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse extends SpeakeasyBase {
    consentArtifact?: shared.ConsentArtifact;
    contentType: string;
    statusCode: number;
}
