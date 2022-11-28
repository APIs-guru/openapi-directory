import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3GcsDocument } from "./googleclouddocumentaiv1beta3gcsdocument";



// GoogleCloudDocumentaiV1beta3GcsDocuments
/** 
 * Specifies a set of documents on Cloud Storage.
**/
export class GoogleCloudDocumentaiV1beta3GcsDocuments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDocumentaiV1beta3GcsDocument })
  documents?: GoogleCloudDocumentaiV1beta3GcsDocument[];
}
