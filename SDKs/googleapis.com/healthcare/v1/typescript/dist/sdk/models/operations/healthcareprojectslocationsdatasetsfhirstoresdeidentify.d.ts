import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyPathParams extends SpeakeasyBase {
    sourceStore: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsFhirStoresDeidentifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyQueryParams;
    request?: shared.DeidentifyFhirStoreRequest;
    security: HealthcareProjectsLocationsDatasetsFhirStoresDeidentifySecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
