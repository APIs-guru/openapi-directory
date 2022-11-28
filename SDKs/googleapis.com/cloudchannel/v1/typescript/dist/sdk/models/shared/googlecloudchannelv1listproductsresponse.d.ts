import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Product } from "./googlecloudchannelv1product";
/**
 * Response message for ListProducts.
**/
export declare class GoogleCloudChannelV1ListProductsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: GoogleCloudChannelV1Product[];
}
