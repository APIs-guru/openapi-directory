import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams;
    request?: shared.HttpBody;
    security: HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
