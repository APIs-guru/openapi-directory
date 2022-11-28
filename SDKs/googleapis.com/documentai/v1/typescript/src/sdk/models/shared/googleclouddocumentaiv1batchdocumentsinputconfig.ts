import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1GcsDocuments } from "./googleclouddocumentaiv1gcsdocuments";
import { GoogleCloudDocumentaiV1GcsPrefix } from "./googleclouddocumentaiv1gcsprefix";



// GoogleCloudDocumentaiV1BatchDocumentsInputConfig
/** 
 * The common config to specify a set of documents used as input.
**/
export class GoogleCloudDocumentaiV1BatchDocumentsInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDocuments" })
  gcsDocuments?: GoogleCloudDocumentaiV1GcsDocuments;

  @SpeakeasyMetadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: GoogleCloudDocumentaiV1GcsPrefix;
}
