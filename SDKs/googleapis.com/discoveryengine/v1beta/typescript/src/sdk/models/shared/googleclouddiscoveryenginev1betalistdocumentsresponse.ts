import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaDocument } from "./googleclouddiscoveryenginev1betadocument";



// GoogleCloudDiscoveryengineV1betaListDocumentsResponse
/** 
 * Response message for DocumentService.ListDocuments method.
**/
export class GoogleCloudDiscoveryengineV1betaListDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDiscoveryengineV1betaDocument })
  documents?: GoogleCloudDiscoveryengineV1betaDocument[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
