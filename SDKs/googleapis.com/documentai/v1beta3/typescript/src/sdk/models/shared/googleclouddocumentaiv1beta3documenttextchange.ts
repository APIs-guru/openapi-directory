import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";


// GoogleCloudDocumentaiV1beta3DocumentTextChange
/** 
 * This message is used for text changes aka. OCR corrections.
**/
export class GoogleCloudDocumentaiV1beta3DocumentTextChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=changedText" })
  changedText?: string;

  @Metadata({ data: "json, name=provenance", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentProvenance })
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance[];

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
}
