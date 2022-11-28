import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnQueryParams;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
