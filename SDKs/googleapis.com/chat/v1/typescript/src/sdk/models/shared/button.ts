import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageButton } from "./imagebutton";
import { TextButton } from "./textbutton";


// Button
/** 
 * A button. Can be a text button or an image button.
**/
export class Button extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageButton" })
  imageButton?: ImageButton;

  @Metadata({ data: "json, name=textButton" })
  textButton?: TextButton;
}
