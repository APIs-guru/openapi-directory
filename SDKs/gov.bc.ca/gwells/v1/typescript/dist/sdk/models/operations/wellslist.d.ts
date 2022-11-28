import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WellsListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class WellsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.WellList[];
}
export declare class WellsListRequest extends SpeakeasyBase {
    queryParams: WellsListQueryParams;
}
export declare class WellsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wellsList200ApplicationJsonObject?: WellsList200ApplicationJson;
}
