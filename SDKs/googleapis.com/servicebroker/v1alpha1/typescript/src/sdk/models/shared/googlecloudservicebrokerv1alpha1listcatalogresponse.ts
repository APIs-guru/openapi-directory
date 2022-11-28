import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1alpha1Service } from "./googlecloudservicebrokerv1alpha1service";



// GoogleCloudServicebrokerV1alpha1ListCatalogResponse
/** 
 * Response message for the `ListCatalog()` method.
**/
export class GoogleCloudServicebrokerV1alpha1ListCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1alpha1Service })
  services?: GoogleCloudServicebrokerV1alpha1Service[];
}
