import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasRecentActivityListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    user?: string;
    username?: string;
}
export declare class ExtrasRecentActivityList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.UserAction[];
}
export declare class ExtrasRecentActivityListRequest extends SpeakeasyBase {
    queryParams: ExtrasRecentActivityListQueryParams;
}
export declare class ExtrasRecentActivityListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasRecentActivityList200ApplicationJsonObject?: ExtrasRecentActivityList200ApplicationJson;
}
