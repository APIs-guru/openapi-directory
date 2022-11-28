import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeColor } from "./googletypecolor";
import { GoogleCloudDocumentaiV1beta2DocumentStyleFontSize } from "./googleclouddocumentaiv1beta2documentstylefontsize";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";



// GoogleCloudDocumentaiV1beta2DocumentStyle
/** 
 * Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
**/
export class GoogleCloudDocumentaiV1beta2DocumentStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: GoogleTypeColor;

  @SpeakeasyMetadata({ data: "json, name=fontFamily" })
  fontFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=fontSize" })
  fontSize?: GoogleCloudDocumentaiV1beta2DocumentStyleFontSize;

  @SpeakeasyMetadata({ data: "json, name=fontWeight" })
  fontWeight?: string;

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;

  @SpeakeasyMetadata({ data: "json, name=textDecoration" })
  textDecoration?: string;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: string;
}
