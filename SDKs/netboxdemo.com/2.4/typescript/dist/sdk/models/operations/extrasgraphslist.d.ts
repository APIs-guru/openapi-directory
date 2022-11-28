import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasGraphsListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    type?: string;
}
export declare class ExtrasGraphsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Graph[];
}
export declare class ExtrasGraphsListRequest extends SpeakeasyBase {
    queryParams: ExtrasGraphsListQueryParams;
}
export declare class ExtrasGraphsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasGraphsList200ApplicationJsonObject?: ExtrasGraphsList200ApplicationJson;
}
