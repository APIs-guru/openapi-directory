import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Catalog } from "./googlecloudprivatecatalogproducerv1beta1catalog";



export class GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GoogleCloudPrivatecatalogproducerV1beta1Catalog })
  catalogs?: GoogleCloudPrivatecatalogproducerV1beta1Catalog[];

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
