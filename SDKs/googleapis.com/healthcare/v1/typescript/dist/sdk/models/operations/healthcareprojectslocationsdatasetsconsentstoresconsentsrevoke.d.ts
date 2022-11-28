import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokePathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeQueryParams;
    request?: shared.RevokeConsentRequest;
    security: HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeResponse extends SpeakeasyBase {
    consent?: shared.Consent;
    contentType: string;
    statusCode: number;
}
