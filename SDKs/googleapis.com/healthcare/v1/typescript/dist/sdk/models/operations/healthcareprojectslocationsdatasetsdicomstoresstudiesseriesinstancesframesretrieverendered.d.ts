import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams extends SpeakeasyBase {
    dicomWebPath: string;
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams;
    security: HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
