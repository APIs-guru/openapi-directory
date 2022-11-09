import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";


// GoogleCloudDocumentaiV1beta2DocumentTextChange
/** 
 * This message is used for text changes aka. OCR corrections.
**/
export class GoogleCloudDocumentaiV1beta2DocumentTextChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=changedText" })
  changedText?: string;

  @Metadata({ data: "json, name=provenance", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentProvenance })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance[];

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
}
