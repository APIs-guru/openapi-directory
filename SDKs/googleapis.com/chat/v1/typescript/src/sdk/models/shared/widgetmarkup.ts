import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";
import { Image } from "./image";
import { KeyValue } from "./keyvalue";
import { TextParagraph } from "./textparagraph";



// WidgetMarkup
/** 
 * A widget is a UI element that presents texts, images, etc.
**/
export class WidgetMarkup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: Button })
  buttons?: Button[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: KeyValue;

  @SpeakeasyMetadata({ data: "json, name=textParagraph" })
  textParagraph?: TextParagraph;
}
