import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeletePathParams extends SpeakeasyBase {
    dicomWebPath: string;
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeletePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteQueryParams;
    security: HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
