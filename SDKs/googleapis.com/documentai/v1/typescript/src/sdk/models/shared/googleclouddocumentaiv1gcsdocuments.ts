import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1GcsDocument } from "./googleclouddocumentaiv1gcsdocument";


// GoogleCloudDocumentaiV1GcsDocuments
/** 
 * Specifies a set of documents on Cloud Storage.
**/
export class GoogleCloudDocumentaiV1GcsDocuments extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents", elemType: shared.GoogleCloudDocumentaiV1GcsDocument })
  documents?: GoogleCloudDocumentaiV1GcsDocument[];
}
