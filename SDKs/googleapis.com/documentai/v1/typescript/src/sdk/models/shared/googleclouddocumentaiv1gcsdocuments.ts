import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1GcsDocument } from "./googleclouddocumentaiv1gcsdocument";



// GoogleCloudDocumentaiV1GcsDocuments
/** 
 * Specifies a set of documents on Cloud Storage.
**/
export class GoogleCloudDocumentaiV1GcsDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDocumentaiV1GcsDocument })
  documents?: GoogleCloudDocumentaiV1GcsDocument[];
}
