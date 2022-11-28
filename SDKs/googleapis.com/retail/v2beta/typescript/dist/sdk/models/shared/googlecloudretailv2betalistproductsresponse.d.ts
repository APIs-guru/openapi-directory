import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";
/**
 * Response message for ProductService.ListProducts method.
**/
export declare class GoogleCloudRetailV2betaListProductsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: GoogleCloudRetailV2betaProduct[];
}
