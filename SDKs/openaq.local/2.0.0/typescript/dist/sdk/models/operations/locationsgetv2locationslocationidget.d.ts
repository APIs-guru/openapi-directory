import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocationsGetV2LocationsLocationIdGetPathParams extends SpeakeasyBase {
    locationId: number;
}
export declare class LocationsGetV2LocationsLocationIdGetQueryParams extends SpeakeasyBase {
    city?: string[];
    coordinates?: string;
    country?: string[];
    countryId?: string;
    dumpRaw?: boolean;
    entity?: shared.EntityTypesEnum;
    hasGeo?: boolean;
    isAnalysis?: boolean;
    isMobile?: boolean;
    limit?: number;
    location?: any[];
    manufacturerName?: string[];
    modelName?: string[];
    offset?: number;
    orderBy?: shared.LocationsOrderEnum;
    page?: number;
    parameter?: any[];
    parameterId?: number;
    radius?: number;
    sensorType?: shared.SensorTypesEnum;
    sort?: shared.SortEnum;
    sourceName?: string[];
    unit?: string[];
}
export declare class LocationsGetV2LocationsLocationIdGetRequest extends SpeakeasyBase {
    pathParams: LocationsGetV2LocationsLocationIdGetPathParams;
    queryParams: LocationsGetV2LocationsLocationIdGetQueryParams;
}
export declare class LocationsGetV2LocationsLocationIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqResult?: shared.OpenAqResult;
    statusCode: number;
}
