import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1documenttextanchortextsegment";


// GoogleCloudDocumentaiV1DocumentTextAnchor
/** 
 * Text reference indexing into the Document.text.
**/
export class GoogleCloudDocumentaiV1DocumentTextAnchor extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=textSegments", elemType: shared.GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment })
  textSegments?: GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment[];
}
