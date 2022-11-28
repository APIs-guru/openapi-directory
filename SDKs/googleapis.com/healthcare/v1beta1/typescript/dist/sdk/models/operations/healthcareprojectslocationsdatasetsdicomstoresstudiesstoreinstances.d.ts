import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams extends SpeakeasyBase {
    dicomWebPath: string;
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams;
    request?: shared.HttpBody;
    security: HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
