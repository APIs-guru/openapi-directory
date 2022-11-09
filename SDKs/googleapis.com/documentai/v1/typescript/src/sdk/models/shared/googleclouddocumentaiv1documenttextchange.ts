import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";


// GoogleCloudDocumentaiV1DocumentTextChange
/** 
 * This message is used for text changes aka. OCR corrections.
**/
export class GoogleCloudDocumentaiV1DocumentTextChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=changedText" })
  changedText?: string;

  @Metadata({ data: "json, name=provenance", elemType: shared.GoogleCloudDocumentaiV1DocumentProvenance })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance[];

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
}
