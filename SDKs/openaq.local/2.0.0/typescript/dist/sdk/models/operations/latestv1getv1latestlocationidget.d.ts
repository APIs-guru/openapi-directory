import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LatestV1GetV1LatestLocationIdGetPathParams extends SpeakeasyBase {
    locationId: number;
}
export declare class LatestV1GetV1LatestLocationIdGetQueryParams extends SpeakeasyBase {
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
export declare class LatestV1GetV1LatestLocationIdGetRequest extends SpeakeasyBase {
    pathParams: LatestV1GetV1LatestLocationIdGetPathParams;
    queryParams: LatestV1GetV1LatestLocationIdGetQueryParams;
}
export declare class LatestV1GetV1LatestLocationIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqResult?: shared.OpenAqResult;
    statusCode: number;
}
