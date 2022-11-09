import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1beta2documenttextanchortextsegment";


// GoogleCloudDocumentaiV1beta2DocumentTextAnchor
/** 
 * Text reference indexing into the Document.text.
**/
export class GoogleCloudDocumentaiV1beta2DocumentTextAnchor extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=textSegments", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment })
  textSegments?: GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment[];
}
