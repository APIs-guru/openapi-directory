import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
import { GoogleAppsCardV1SwitchControl } from "./googleappscardv1switchcontrol";



// GoogleAppsCardV1DecoratedText
/** 
 * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
**/
export class GoogleAppsCardV1DecoratedText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottomLabel" })
  bottomLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=button" })
  button?: GoogleAppsCardV1Button;

  @SpeakeasyMetadata({ data: "json, name=endIcon" })
  endIcon?: GoogleAppsCardV1Icon;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: GoogleAppsCardV1Icon;

  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;

  @SpeakeasyMetadata({ data: "json, name=startIcon" })
  startIcon?: GoogleAppsCardV1Icon;

  @SpeakeasyMetadata({ data: "json, name=switchControl" })
  switchControl?: GoogleAppsCardV1SwitchControl;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=topLabel" })
  topLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=wrapText" })
  wrapText?: boolean;
}
