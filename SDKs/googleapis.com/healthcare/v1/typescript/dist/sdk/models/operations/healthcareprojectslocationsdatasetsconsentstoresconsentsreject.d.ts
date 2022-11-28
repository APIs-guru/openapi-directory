import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectPathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectQueryParams;
    request?: shared.RejectConsentRequest;
    security: HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectResponse extends SpeakeasyBase {
    consent?: shared.Consent;
    contentType: string;
    statusCode: number;
}
