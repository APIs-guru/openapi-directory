import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1beta3documenttextanchortextsegment";



// GoogleCloudDocumentaiV1beta3DocumentTextAnchor
/** 
 * Text reference indexing into the Document.text.
**/
export class GoogleCloudDocumentaiV1beta3DocumentTextAnchor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=textSegments", elemType: GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment })
  textSegments?: GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment[];
}
