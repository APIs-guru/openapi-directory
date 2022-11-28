import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Product } from "./googlecloudvisionv1p2beta1product";
/**
 * Information about a product.
**/
export declare class GoogleCloudVisionV1p2beta1ProductSearchResultsResult extends SpeakeasyBase {
    image?: string;
    product?: GoogleCloudVisionV1p2beta1Product;
    score?: number;
}
