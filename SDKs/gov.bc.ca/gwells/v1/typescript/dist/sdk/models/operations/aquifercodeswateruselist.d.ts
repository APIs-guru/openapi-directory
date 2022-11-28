import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquiferCodesWaterUseListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AquiferCodesWaterUseList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.WaterUse[];
}
export declare class AquiferCodesWaterUseListRequest extends SpeakeasyBase {
    queryParams: AquiferCodesWaterUseListQueryParams;
}
export declare class AquiferCodesWaterUseListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aquiferCodesWaterUseList200ApplicationJsonObject?: AquiferCodesWaterUseList200ApplicationJson;
}
