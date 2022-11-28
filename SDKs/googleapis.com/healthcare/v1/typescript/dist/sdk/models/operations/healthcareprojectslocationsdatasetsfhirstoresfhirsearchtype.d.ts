import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypePathParams extends SpeakeasyBase {
    parent: string;
    resourceType: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeQueryParams;
    request?: shared.SearchResourcesRequest;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
