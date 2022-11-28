import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Product } from "./googlecloudvisionv1p1beta1product";
/**
 * Information about a product.
**/
export declare class GoogleCloudVisionV1p1beta1ProductSearchResultsResult extends SpeakeasyBase {
    image?: string;
    product?: GoogleCloudVisionV1p1beta1Product;
    score?: number;
}
