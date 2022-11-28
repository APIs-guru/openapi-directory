import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsDicomStoresCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dicomStoreId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresCreateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsDicomStoresCreatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsDicomStoresCreateQueryParams;
    request?: shared.DicomStore;
    security: HealthcareProjectsLocationsDatasetsDicomStoresCreateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresCreateResponse extends SpeakeasyBase {
    contentType: string;
    dicomStore?: shared.DicomStore;
    statusCode: number;
}
