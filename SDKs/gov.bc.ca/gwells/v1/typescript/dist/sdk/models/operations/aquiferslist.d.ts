import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquifersListQueryParams extends SpeakeasyBase {
    aquiferId?: number;
    limit?: number;
    offset?: number;
    ordering?: string;
    search?: string;
}
export declare class AquifersList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Aquifer[];
}
export declare class AquifersListRequest extends SpeakeasyBase {
    queryParams: AquifersListQueryParams;
}
export declare class AquifersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aquifersList200ApplicationJsonObject?: AquifersList200ApplicationJson;
}
