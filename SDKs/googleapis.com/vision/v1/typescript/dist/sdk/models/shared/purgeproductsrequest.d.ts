import { SpeakeasyBase } from "../../../internal/utils";
import { ProductSetPurgeConfig } from "./productsetpurgeconfig";
/**
 * Request message for the `PurgeProducts` method.
**/
export declare class PurgeProductsRequest extends SpeakeasyBase {
    deleteOrphanProducts?: boolean;
    force?: boolean;
    productSetPurgeConfig?: ProductSetPurgeConfig;
}
