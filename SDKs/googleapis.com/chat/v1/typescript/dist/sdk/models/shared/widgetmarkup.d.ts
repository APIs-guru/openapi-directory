import { SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";
import { Image } from "./image";
import { KeyValue } from "./keyvalue";
import { TextParagraph } from "./textparagraph";
/**
 * A widget is a UI element that presents texts, images, etc.
**/
export declare class WidgetMarkup extends SpeakeasyBase {
    buttons?: Button[];
    image?: Image;
    keyValue?: KeyValue;
    textParagraph?: TextParagraph;
}
