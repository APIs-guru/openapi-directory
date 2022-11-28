import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";



// GoogleCloudDocumentaiV1beta3DocumentTextChange
/** 
 * This message is used for text changes aka. OCR corrections.
**/
export class GoogleCloudDocumentaiV1beta3DocumentTextChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changedText" })
  changedText?: string;

  @SpeakeasyMetadata({ data: "json, name=provenance", elemType: GoogleCloudDocumentaiV1beta3DocumentProvenance })
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance[];

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
}
