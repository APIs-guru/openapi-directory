import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1beta2DocumentStyleFontSize } from "./googleclouddocumentaiv1beta2documentstylefontsize";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";
/**
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentStyle extends SpeakeasyBase {
    backgroundColor?: GoogleTypeColor;
    color?: GoogleTypeColor;
    fontFamily?: string;
    fontSize?: GoogleCloudDocumentaiV1beta2DocumentStyleFontSize;
    fontWeight?: string;
    textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
    textDecoration?: string;
    textStyle?: string;
}
