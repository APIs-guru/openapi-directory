import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";
/**
 * Response message for ProductService.ListProducts method.
**/
export declare class GoogleCloudRetailV2ListProductsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: GoogleCloudRetailV2Product[];
}
