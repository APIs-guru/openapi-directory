import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MeasurementsGetV2MeasurementsGetQueryParams extends SpeakeasyBase {
    city?: string[];
    coordinates?: string;
    country?: string[];
    countryId?: string;
    dateFrom?: any;
    dateTo?: any;
    entity?: shared.EntityTypesEnum;
    format?: string;
    hasGeo?: boolean;
    includeFields?: string;
    isAnalysis?: boolean;
    isMobile?: boolean;
    limit?: number;
    location?: any[];
    locationId?: number;
    offset?: number;
    orderBy?: shared.MeasOrderEnum;
    page?: number;
    parameter?: any[];
    parameterId?: number;
    project?: number;
    radius?: number;
    sensorType?: shared.SensorTypesEnum;
    sort?: shared.SortEnum;
    unit?: string[];
    valueFrom?: number;
    valueTo?: number;
}
export declare class MeasurementsGetV2MeasurementsGetRequest extends SpeakeasyBase {
    queryParams: MeasurementsGetV2MeasurementsGetQueryParams;
}
export declare class MeasurementsGetV2MeasurementsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    measurementsGetV2MeasurementsGet200ApplicationJsonAny?: any;
}
