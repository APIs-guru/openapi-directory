import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams extends SpeakeasyBase {
    parent: string;
    type: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams;
    request?: shared.HttpBody;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
