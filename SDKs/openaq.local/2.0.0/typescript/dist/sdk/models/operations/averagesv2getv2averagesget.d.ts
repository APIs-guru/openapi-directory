import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AveragesV2GetV2AveragesGetQueryParams extends SpeakeasyBase {
    country?: string[];
    countryId?: string;
    dateFrom?: any;
    dateTo?: any;
    group?: boolean;
    limit?: number;
    location?: string[];
    offset?: number;
    page?: number;
    parameter?: any[];
    parameterId?: number;
    project?: any[];
    projectId?: number;
    sort?: shared.SortEnum;
    spatial: shared.SpatialEnum;
    temporal: shared.TemporalEnum;
    unit?: string[];
}
export declare class AveragesV2GetV2AveragesGetRequest extends SpeakeasyBase {
    queryParams: AveragesV2GetV2AveragesGetQueryParams;
}
export declare class AveragesV2GetV2AveragesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqResult?: shared.OpenAqResult;
    statusCode: number;
}
