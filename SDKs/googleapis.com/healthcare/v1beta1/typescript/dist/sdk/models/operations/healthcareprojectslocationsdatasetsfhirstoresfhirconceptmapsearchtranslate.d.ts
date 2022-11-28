import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    code?: string;
    conceptMapVersion?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    system?: string;
    target?: string;
    uploadType?: string;
    uploadProtocol?: string;
    url?: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateQueryParams;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
