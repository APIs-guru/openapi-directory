import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Button } from "./button";
import { Image } from "./image";
import { KeyValue } from "./keyvalue";
import { TextParagraph } from "./textparagraph";


// WidgetMarkup
/** 
 * A widget is a UI element that presents texts, images, etc.
**/
export class WidgetMarkup extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.Button })
  buttons?: Button[];

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: KeyValue;

  @Metadata({ data: "json, name=textParagraph" })
  textParagraph?: TextParagraph;
}
