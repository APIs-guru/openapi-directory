import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1DocumentStyleFontSize } from "./googleclouddocumentaiv1documentstylefontsize";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";


// GoogleCloudDocumentaiV1DocumentStyle
/** 
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
export class GoogleCloudDocumentaiV1DocumentStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: GoogleTypeColor;

  @Metadata({ data: "json, name=color" })
  color?: GoogleTypeColor;

  @Metadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @Metadata({ data: "json, name=fontSize" })
  fontSize?: GoogleCloudDocumentaiV1DocumentStyleFontSize;

  @Metadata({ data: "json, name=fontWeight" })
  fontWeight?: string;

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;

  @Metadata({ data: "json, name=textDecoration" })
  textDecoration?: string;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: string;
}
