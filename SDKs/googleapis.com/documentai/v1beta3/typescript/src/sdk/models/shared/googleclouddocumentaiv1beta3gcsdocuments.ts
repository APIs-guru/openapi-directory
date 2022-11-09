import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3GcsDocument } from "./googleclouddocumentaiv1beta3gcsdocument";


// GoogleCloudDocumentaiV1beta3GcsDocuments
/** 
 * Specifies a set of documents on Cloud Storage.
**/
export class GoogleCloudDocumentaiV1beta3GcsDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents", elemType: shared.GoogleCloudDocumentaiV1beta3GcsDocument })
  documents?: GoogleCloudDocumentaiV1beta3GcsDocument[];
}
