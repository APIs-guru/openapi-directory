import { SpeakeasyBase } from "../../../internal/utils";
import { ProductSet } from "./productset";
/**
 * Response message for the `ListProductSets` method.
**/
export declare class ListProductSetsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    productSets?: ProductSet[];
}
