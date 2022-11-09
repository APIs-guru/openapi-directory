import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnClick } from "./onclick";


// TextButton
/** 
 * A button with text and onclick action.
**/
export class TextButton extends SpeakeasyBase {
  @Metadata({ data: "json, name=onClick" })
  onClick?: OnClick;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
