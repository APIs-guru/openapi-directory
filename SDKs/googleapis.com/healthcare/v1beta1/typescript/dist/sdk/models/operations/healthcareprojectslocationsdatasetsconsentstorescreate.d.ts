import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    consentStoreId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCreateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresCreatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresCreateQueryParams;
    request?: shared.ConsentStore;
    security: HealthcareProjectsLocationsDatasetsConsentStoresCreateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresCreateResponse extends SpeakeasyBase {
    consentStore?: shared.ConsentStore;
    contentType: string;
    statusCode: number;
}
