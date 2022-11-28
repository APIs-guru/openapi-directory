import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fhirStoreId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresCreateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresCreatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresCreateQueryParams;
    request?: shared.FhirStore;
    security: HealthcareProjectsLocationsDatasetsFhirStoresCreateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresCreateResponse extends SpeakeasyBase {
    contentType: string;
    fhirStore?: shared.FhirStore;
    statusCode: number;
}
