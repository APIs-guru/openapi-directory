import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";



// GoogleCloudDocumentaiV1beta2DocumentTextChange
/** 
 * This message is used for text changes aka. OCR corrections.
**/
export class GoogleCloudDocumentaiV1beta2DocumentTextChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changedText" })
  changedText?: string;

  @SpeakeasyMetadata({ data: "json, name=provenance", elemType: GoogleCloudDocumentaiV1beta2DocumentProvenance })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance[];

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
}
