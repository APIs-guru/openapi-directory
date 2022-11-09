import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1SwitchControl } from "./googleappscardv1switchcontrol";


// GoogleAppsCardV1DecoratedText
/** 
 * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
**/
export class GoogleAppsCardV1DecoratedText extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottomLabel" })
  bottomLabel?: string;

  @Metadata({ data: "json, name=button" })
  button?: GoogleAppsCardV1Button;

  @Metadata({ data: "json, name=endIcon" })
  endIcon?: GoogleAppsCardV1Icon;

  @Metadata({ data: "json, name=icon" })
  icon?: GoogleAppsCardV1Icon;

  @Metadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;

  @Metadata({ data: "json, name=startIcon" })
  startIcon?: GoogleAppsCardV1Icon;

  @Metadata({ data: "json, name=switchControl" })
  switchControl?: GoogleAppsCardV1SwitchControl;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=topLabel" })
  topLabel?: string;

  @Metadata({ data: "json, name=wrapText" })
  wrapText?: boolean;
}
