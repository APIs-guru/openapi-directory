import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPlatformsListQueryParams extends SpeakeasyBase {
    limit?: number;
    manufacturer?: string;
    manufacturerId?: string;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class DcimPlatformsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Platform[];
}
export declare class DcimPlatformsListRequest extends SpeakeasyBase {
    queryParams: DcimPlatformsListQueryParams;
}
export declare class DcimPlatformsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimPlatformsList200ApplicationJsonObject?: DcimPlatformsList200ApplicationJson;
}
