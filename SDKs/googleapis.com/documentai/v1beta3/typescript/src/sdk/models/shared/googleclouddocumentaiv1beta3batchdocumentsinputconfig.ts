import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3GcsDocuments } from "./googleclouddocumentaiv1beta3gcsdocuments";
import { GoogleCloudDocumentaiV1beta3GcsPrefix } from "./googleclouddocumentaiv1beta3gcsprefix";


// GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig
/** 
 * The common config to specify a set of documents used as input.
**/
export class GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDocuments" })
  gcsDocuments?: GoogleCloudDocumentaiV1beta3GcsDocuments;

  @Metadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: GoogleCloudDocumentaiV1beta3GcsPrefix;
}
