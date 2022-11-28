import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidatePathParams extends SpeakeasyBase {
    parent: string;
    type: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    profile?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateQueryParams;
    request?: shared.HttpBody;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
