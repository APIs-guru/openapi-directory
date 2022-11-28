import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1beta2documenttextanchortextsegment";



// GoogleCloudDocumentaiV1beta2DocumentTextAnchor
/** 
 * Text reference indexing into the Document.text.
**/
export class GoogleCloudDocumentaiV1beta2DocumentTextAnchor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=textSegments", elemType: GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment })
  textSegments?: GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment[];
}
