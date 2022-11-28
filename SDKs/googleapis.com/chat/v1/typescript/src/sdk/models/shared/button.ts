import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageButton } from "./imagebutton";
import { TextButton } from "./textbutton";



// Button
/** 
 * A button. Can be a text button or an image button.
**/
export class Button extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageButton" })
  imageButton?: ImageButton;

  @SpeakeasyMetadata({ data: "json, name=textButton" })
  textButton?: TextButton;
}
