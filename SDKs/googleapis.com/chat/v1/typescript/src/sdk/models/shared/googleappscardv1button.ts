import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";



// GoogleAppsCardV1Button
/** 
 * A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action.
**/
export class GoogleAppsCardV1Button extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altText" })
  altText?: string;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: GoogleAppsCardV1Icon;

  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
