import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTagsListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    slug?: string;
}
export declare class ExtrasTagsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Tag[];
}
export declare class ExtrasTagsListRequest extends SpeakeasyBase {
    queryParams: ExtrasTagsListQueryParams;
}
export declare class ExtrasTagsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasTagsList200ApplicationJsonObject?: ExtrasTagsList200ApplicationJson;
}
