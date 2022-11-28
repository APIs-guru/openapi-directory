import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";



// TextButton
/** 
 * A button with text and onclick action.
**/
export class TextButton extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: OnClick;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
