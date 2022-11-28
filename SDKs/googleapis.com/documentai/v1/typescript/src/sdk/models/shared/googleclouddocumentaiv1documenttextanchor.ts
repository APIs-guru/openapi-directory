import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1documenttextanchortextsegment";



// GoogleCloudDocumentaiV1DocumentTextAnchor
/** 
 * Text reference indexing into the Document.text.
**/
export class GoogleCloudDocumentaiV1DocumentTextAnchor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=textSegments", elemType: GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment })
  textSegments?: GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment[];
}
