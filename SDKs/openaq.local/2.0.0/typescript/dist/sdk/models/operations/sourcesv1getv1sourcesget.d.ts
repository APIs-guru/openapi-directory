import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SourcesV1GetV1SourcesGetQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    orderBy?: shared.SourcesV1OrderEnum;
    page?: number;
    sort?: shared.SortEnum;
}
export declare class SourcesV1GetV1SourcesGetRequest extends SpeakeasyBase {
    queryParams: SourcesV1GetV1SourcesGetQueryParams;
}
export declare class SourcesV1GetV1SourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqResult?: shared.OpenAqResult;
    statusCode: number;
}
