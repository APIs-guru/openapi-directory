import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    at?: string;
    count?: number;
    pageToken?: string;
    since?: string;
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
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirHistorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryQueryParams;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirHistorySecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
