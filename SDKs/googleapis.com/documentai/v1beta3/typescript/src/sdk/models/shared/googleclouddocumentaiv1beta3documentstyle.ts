import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1beta3DocumentStyleFontSize } from "./googleclouddocumentaiv1beta3documentstylefontsize";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";



// GoogleCloudDocumentaiV1beta3DocumentStyle
/** 
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
export class GoogleCloudDocumentaiV1beta3DocumentStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=fontSize" })
  fontSize?: GoogleCloudDocumentaiV1beta3DocumentStyleFontSize;

  @SpeakeasyMetadata({ data: "json, name=fontWeight" })
  fontWeight?: string;

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;

  @SpeakeasyMetadata({ data: "json, name=textDecoration" })
  textDecoration?: string;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: string;
}
