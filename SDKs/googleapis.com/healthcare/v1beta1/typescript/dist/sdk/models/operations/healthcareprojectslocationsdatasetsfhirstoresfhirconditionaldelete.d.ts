import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams extends SpeakeasyBase {
    parent: string;
    type: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
