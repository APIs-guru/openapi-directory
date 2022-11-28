import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaDocument } from "./googleclouddiscoveryenginev1betadocument";



// GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource
/** 
 * The inline source for the input config for ImportDocuments method.
**/
export class GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDiscoveryengineV1betaDocument })
  documents?: GoogleCloudDiscoveryengineV1betaDocument[];
}
