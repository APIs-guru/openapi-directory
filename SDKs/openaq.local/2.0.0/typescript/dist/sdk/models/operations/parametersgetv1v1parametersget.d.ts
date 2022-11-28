import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParametersGetv1V1ParametersGetQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderBy?: any;
    page?: number;
    sort?: shared.SortEnum;
    sourceId?: number[];
    sourceName?: string[];
    sourceSlug?: string[];
}
export declare class ParametersGetv1V1ParametersGetRequest extends SpeakeasyBase {
    queryParams: ParametersGetv1V1ParametersGetQueryParams;
}
export declare class ParametersGetv1V1ParametersGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqParametersResult?: shared.OpenAqParametersResult;
    statusCode: number;
}
