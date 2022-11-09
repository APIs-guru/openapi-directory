import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MeasurementsGetV1V1MeasurementsGetQueryParams extends SpeakeasyBase {
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
export declare class MeasurementsGetV1V1MeasurementsGetRequest extends SpeakeasyBase {
    queryParams: MeasurementsGetV1V1MeasurementsGetQueryParams;
}
export declare class MeasurementsGetV1V1MeasurementsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    measurementsGetV1V1MeasurementsGet200ApplicationJsonAny?: any;
}
