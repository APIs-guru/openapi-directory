import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Product } from "./googlecloudprivatecatalogv1beta1product";
/**
 * Response message for PrivateCatalog.SearchProducts.
**/
export declare class GoogleCloudPrivatecatalogV1beta1SearchProductsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    products?: GoogleCloudPrivatecatalogV1beta1Product[];
}
