import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Product } from "./googlecloudprivatecatalogproducerv1beta1product";



export class GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: GoogleCloudPrivatecatalogproducerV1beta1Product })
  products?: GoogleCloudPrivatecatalogproducerV1beta1Product[];
}
