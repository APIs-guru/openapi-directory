import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1DocumentStyleFontSize } from "./googleclouddocumentaiv1documentstylefontsize";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
/**
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
export declare class GoogleCloudDocumentaiV1DocumentStyle extends SpeakeasyBase {
    backgroundColor?: GoogleTypeColor;
    color?: GoogleTypeColor;
    fontFamily?: string;
    fontSize?: GoogleCloudDocumentaiV1DocumentStyleFontSize;
    fontWeight?: string;
    textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
    textDecoration?: string;
    textStyle?: string;
}
