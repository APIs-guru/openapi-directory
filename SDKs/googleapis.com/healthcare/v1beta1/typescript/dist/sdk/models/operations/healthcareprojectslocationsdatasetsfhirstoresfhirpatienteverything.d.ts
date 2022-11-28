import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    count?: number;
    pageToken?: string;
    since?: string;
    type?: string;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    end?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    start?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
