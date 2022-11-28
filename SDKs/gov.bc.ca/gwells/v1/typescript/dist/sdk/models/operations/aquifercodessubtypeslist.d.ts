import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquiferCodesSubtypesListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AquiferCodesSubtypesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.AquiferSubtype[];
}
export declare class AquiferCodesSubtypesListRequest extends SpeakeasyBase {
    queryParams: AquiferCodesSubtypesListQueryParams;
}
export declare class AquiferCodesSubtypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aquiferCodesSubtypesList200ApplicationJsonObject?: AquiferCodesSubtypesList200ApplicationJson;
}
