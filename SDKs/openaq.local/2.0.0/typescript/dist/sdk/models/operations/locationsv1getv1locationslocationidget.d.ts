import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Locationsv1GetV1LocationsLocationIdGetPathParams extends SpeakeasyBase {
    locationId: number;
}
export declare class Locationsv1GetV1LocationsLocationIdGetQueryParams extends SpeakeasyBase {
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
export declare class Locationsv1GetV1LocationsLocationIdGetRequest extends SpeakeasyBase {
    pathParams: Locationsv1GetV1LocationsLocationIdGetPathParams;
    queryParams: Locationsv1GetV1LocationsLocationIdGetQueryParams;
}
export declare class Locationsv1GetV1LocationsLocationIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqResult?: shared.OpenAqResult;
    statusCode: number;
}
