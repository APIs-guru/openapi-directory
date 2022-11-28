import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ProductInput } from "./googlecloudretailv2product";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";
/**
 * Detailed product information associated with a user event.
**/
export declare class GoogleCloudRetailV2ProductDetailInput extends SpeakeasyBase {
    product?: GoogleCloudRetailV2ProductInput;
    quantity?: number;
}
/**
 * Detailed product information associated with a user event.
**/
export declare class GoogleCloudRetailV2ProductDetail extends SpeakeasyBase {
    product?: GoogleCloudRetailV2Product;
    quantity?: number;
}
