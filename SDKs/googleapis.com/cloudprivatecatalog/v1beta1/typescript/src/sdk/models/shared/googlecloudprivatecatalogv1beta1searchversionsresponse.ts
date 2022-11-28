import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Version } from "./googlecloudprivatecatalogv1beta1version";



// GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse
/** 
 * Response message for PrivateCatalog.SearchVersions.
**/
export class GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: GoogleCloudPrivatecatalogV1beta1Version })
  versions?: GoogleCloudPrivatecatalogV1beta1Version[];
}
