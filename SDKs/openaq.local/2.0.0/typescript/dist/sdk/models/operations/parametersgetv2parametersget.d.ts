import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ParametersGetV2ParametersGetQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderBy?: any;
    page?: number;
    sort?: shared.SortEnum;
    sourceId?: number[];
    sourceName?: string[];
    sourceSlug?: string[];
}
export declare class ParametersGetV2ParametersGetRequest extends SpeakeasyBase {
    queryParams: ParametersGetV2ParametersGetQueryParams;
}
export declare class ParametersGetV2ParametersGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqParametersResult?: shared.OpenAqParametersResult;
    statusCode: number;
}
