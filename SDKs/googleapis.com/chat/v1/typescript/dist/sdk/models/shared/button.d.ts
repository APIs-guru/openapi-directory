import { SpeakeasyBase } from "../../../internal/utils";
import { ImageButton } from "./imagebutton";
import { TextButton } from "./textbutton";
/**
 * A button. Can be a text button or an image button.
**/
export declare class Button extends SpeakeasyBase {
    imageButton?: ImageButton;
    textButton?: TextButton;
}
