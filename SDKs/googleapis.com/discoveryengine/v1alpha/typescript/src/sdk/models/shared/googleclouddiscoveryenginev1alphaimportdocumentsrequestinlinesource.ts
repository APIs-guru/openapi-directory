import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaDocument } from "./googleclouddiscoveryenginev1alphadocument";



// GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource
/** 
 * The inline source for the input config for ImportDocuments method.
**/
export class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDiscoveryengineV1alphaDocument })
  documents?: GoogleCloudDiscoveryengineV1alphaDocument[];
}
