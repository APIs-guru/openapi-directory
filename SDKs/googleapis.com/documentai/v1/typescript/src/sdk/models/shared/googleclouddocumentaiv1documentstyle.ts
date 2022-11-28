import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1DocumentStyleFontSize } from "./googleclouddocumentaiv1documentstylefontsize";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";



// GoogleCloudDocumentaiV1DocumentStyle
/** 
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
export class GoogleCloudDocumentaiV1DocumentStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=fontSize" })
  fontSize?: GoogleCloudDocumentaiV1DocumentStyleFontSize;

  @SpeakeasyMetadata({ data: "json, name=fontWeight" })
  fontWeight?: string;

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;

  @SpeakeasyMetadata({ data: "json, name=textDecoration" })
  textDecoration?: string;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: string;
}
