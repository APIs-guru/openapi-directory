import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";



// GoogleCloudDocumentaiV1DocumentTextChange
/** 
 * This message is used for text changes aka. OCR corrections.
**/
export class GoogleCloudDocumentaiV1DocumentTextChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changedText" })
  changedText?: string;

  @SpeakeasyMetadata({ data: "json, name=provenance", elemType: GoogleCloudDocumentaiV1DocumentProvenance })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance[];

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
}
