import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1beta3DocumentStyleFontSize } from "./googleclouddocumentaiv1beta3documentstylefontsize";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";


// GoogleCloudDocumentaiV1beta3DocumentStyle
/** 
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
export class GoogleCloudDocumentaiV1beta3DocumentStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: GoogleTypeColor;

  @Metadata({ data: "json, name=color" })
  color?: GoogleTypeColor;

  @Metadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @Metadata({ data: "json, name=fontSize" })
  fontSize?: GoogleCloudDocumentaiV1beta3DocumentStyleFontSize;

  @Metadata({ data: "json, name=fontWeight" })
  fontWeight?: string;

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;

  @Metadata({ data: "json, name=textDecoration" })
  textDecoration?: string;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: string;
}
