import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Sku } from "./sku";
/**
 * Response message for `ListSkus`.
**/
export declare class ListSkusResponse extends SpeakeasyBase {
    nextPageToken?: string;
    skus?: Sku[];
}
