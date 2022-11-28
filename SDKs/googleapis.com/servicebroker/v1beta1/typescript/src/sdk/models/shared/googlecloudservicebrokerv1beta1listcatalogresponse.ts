import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Service } from "./googlecloudservicebrokerv1beta1service";



// GoogleCloudServicebrokerV1beta1ListCatalogResponse
/** 
 * Response message for the `ListCatalog()` method.
**/
export class GoogleCloudServicebrokerV1beta1ListCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1beta1Service })
  services?: GoogleCloudServicebrokerV1beta1Service[];
}
