import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaDocument } from "./googleclouddiscoveryenginev1alphadocument";



// GoogleCloudDiscoveryengineV1alphaListDocumentsResponse
/** 
 * Response message for DocumentService.ListDocuments method.
**/
export class GoogleCloudDiscoveryengineV1alphaListDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDiscoveryengineV1alphaDocument })
  documents?: GoogleCloudDiscoveryengineV1alphaDocument[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
