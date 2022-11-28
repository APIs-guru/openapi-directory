import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";
/**
 * Response message for ProductService.ListProducts method.
**/
export declare class GoogleCloudRetailV2alphaListProductsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: GoogleCloudRetailV2alphaProduct[];
    totalSize?: number;
}
