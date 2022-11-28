import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Product } from "./googlecloudprivatecatalogv1beta1product";



// GoogleCloudPrivatecatalogV1beta1SearchProductsResponse
/** 
 * Response message for PrivateCatalog.SearchProducts.
**/
export class GoogleCloudPrivatecatalogV1beta1SearchProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: GoogleCloudPrivatecatalogV1beta1Product })
  products?: GoogleCloudPrivatecatalogV1beta1Product[];
}
