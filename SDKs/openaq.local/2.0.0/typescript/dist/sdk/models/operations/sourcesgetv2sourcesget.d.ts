import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SourcesGetV2SourcesGetQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderBy?: shared.SourcesOrderEnum;
    page?: number;
    sort?: shared.SortEnum;
    sourceId?: number[];
    sourceName?: string[];
    sourceSlug?: string[];
}
export declare class SourcesGetV2SourcesGetRequest extends SpeakeasyBase {
    queryParams: SourcesGetV2SourcesGetQueryParams;
}
export declare class SourcesGetV2SourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqResult?: shared.OpenAqResult;
    statusCode: number;
}
