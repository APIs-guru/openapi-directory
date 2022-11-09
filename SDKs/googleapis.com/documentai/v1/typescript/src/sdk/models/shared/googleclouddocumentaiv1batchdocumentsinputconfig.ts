import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1GcsDocuments } from "./googleclouddocumentaiv1gcsdocuments";
import { GoogleCloudDocumentaiV1GcsPrefix } from "./googleclouddocumentaiv1gcsprefix";


// GoogleCloudDocumentaiV1BatchDocumentsInputConfig
/** 
 * The common config to specify a set of documents used as input.
**/
export class GoogleCloudDocumentaiV1BatchDocumentsInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDocuments" })
  gcsDocuments?: GoogleCloudDocumentaiV1GcsDocuments;

  @Metadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: GoogleCloudDocumentaiV1GcsPrefix;
}
