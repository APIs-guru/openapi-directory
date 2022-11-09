import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";


// GoogleAppsCardV1Button
/** 
 * A button. Can be a text button or an image button.
**/
export class GoogleAppsCardV1Button extends SpeakeasyBase {
  @Metadata({ data: "json, name=altText" })
  altText?: string;

  @Metadata({ data: "json, name=color" })
  color?: Color;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=icon" })
  icon?: GoogleAppsCardV1Icon;

  @Metadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
