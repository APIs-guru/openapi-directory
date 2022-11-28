import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Association } from "./googlecloudprivatecatalogproducerv1beta1association";



export class GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GoogleCloudPrivatecatalogproducerV1beta1Association })
  associations?: GoogleCloudPrivatecatalogproducerV1beta1Association[];

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
