import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1documenttextanchortextsegment";
/**
 * Text reference indexing into the Document.text.
**/
export declare class GoogleCloudDocumentaiV1DocumentTextAnchor extends SpeakeasyBase {
    content?: string;
    textSegments?: GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment[];
}
