import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1beta3documenttextanchortextsegment";


// GoogleCloudDocumentaiV1beta3DocumentTextAnchor
/** 
 * Text reference indexing into the Document.text.
**/
export class GoogleCloudDocumentaiV1beta3DocumentTextAnchor extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=textSegments", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment })
  textSegments?: GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment[];
}
