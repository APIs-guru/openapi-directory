import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquiferCodesDemandListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AquiferCodesDemandList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.AquiferDemand[];
}
export declare class AquiferCodesDemandListRequest extends SpeakeasyBase {
    queryParams: AquiferCodesDemandListQueryParams;
}
export declare class AquiferCodesDemandListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aquiferCodesDemandList200ApplicationJsonObject?: AquiferCodesDemandList200ApplicationJson;
}
