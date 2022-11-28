import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Version } from "./googlecloudprivatecatalogproducerv1beta1version";



export class GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: GoogleCloudPrivatecatalogproducerV1beta1Version })
  versions?: GoogleCloudPrivatecatalogproducerV1beta1Version[];
}
