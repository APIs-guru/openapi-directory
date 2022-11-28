import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1beta3DocumentStyleFontSize } from "./googleclouddocumentaiv1beta3documentstylefontsize";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";
/**
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentStyle extends SpeakeasyBase {
    backgroundColor?: GoogleTypeColor;
    color?: GoogleTypeColor;
    fontFamily?: string;
    fontSize?: GoogleCloudDocumentaiV1beta3DocumentStyleFontSize;
    fontWeight?: string;
    textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
    textDecoration?: string;
    textStyle?: string;
}
