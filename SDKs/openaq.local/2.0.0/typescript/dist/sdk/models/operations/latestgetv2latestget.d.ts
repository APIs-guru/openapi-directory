import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LatestGetV2LatestGetQueryParams extends SpeakeasyBase {
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
    locationId?: number;
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
export declare class LatestGetV2LatestGetRequest extends SpeakeasyBase {
    queryParams: LatestGetV2LatestGetQueryParams;
}
export declare class LatestGetV2LatestGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqResult?: shared.OpenAqResult;
    statusCode: number;
}
