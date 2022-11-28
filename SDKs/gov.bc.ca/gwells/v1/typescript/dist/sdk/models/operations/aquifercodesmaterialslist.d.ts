import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquiferCodesMaterialsListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AquiferCodesMaterialsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.AquiferMaterial[];
}
export declare class AquiferCodesMaterialsListRequest extends SpeakeasyBase {
    queryParams: AquiferCodesMaterialsListQueryParams;
}
export declare class AquiferCodesMaterialsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aquiferCodesMaterialsList200ApplicationJsonObject?: AquiferCodesMaterialsList200ApplicationJson;
}
