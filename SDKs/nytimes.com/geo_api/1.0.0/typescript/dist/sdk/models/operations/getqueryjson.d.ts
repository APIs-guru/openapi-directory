import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryJsonQueryParams extends SpeakeasyBase {
    dateRange?: string;
    elevation?: number;
    facets?: number;
    filter?: string;
    latitude?: string;
    limit?: number;
    longitude?: string;
    name?: string;
    offset?: number;
    query?: string;
    sort?: string;
    sw?: string;
}
export declare class GetQueryJson200ApplicationJson extends SpeakeasyBase {
    results?: shared.Event[];
}
export declare class GetQueryJsonRequest extends SpeakeasyBase {
    queryParams: GetQueryJsonQueryParams;
}
export declare class GetQueryJsonResponse extends SpeakeasyBase {
    contentType: string;
    getQueryJson200ApplicationJsonObject?: GetQueryJson200ApplicationJson;
    statusCode: number;
}
