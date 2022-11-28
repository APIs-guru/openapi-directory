import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1ButtonList } from "./googleappscardv1buttonlist";
import { GoogleAppsCardV1DateTimePicker } from "./googleappscardv1datetimepicker";
import { GoogleAppsCardV1DecoratedText } from "./googleappscardv1decoratedtext";
import { GoogleAppsCardV1Grid } from "./googleappscardv1grid";
import { GoogleAppsCardV1Image } from "./googleappscardv1image";
import { GoogleAppsCardV1SelectionInput } from "./googleappscardv1selectioninput";
import { GoogleAppsCardV1TextInput } from "./googleappscardv1textinput";
import { GoogleAppsCardV1TextParagraph } from "./googleappscardv1textparagraph";



// GoogleAppsCardV1Widget
/** 
 * Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.
**/
export class GoogleAppsCardV1Widget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttonList" })
  buttonList?: GoogleAppsCardV1ButtonList;

  @SpeakeasyMetadata({ data: "json, name=dateTimePicker" })
  dateTimePicker?: GoogleAppsCardV1DateTimePicker;

  @SpeakeasyMetadata({ data: "json, name=decoratedText" })
  decoratedText?: GoogleAppsCardV1DecoratedText;

  @SpeakeasyMetadata({ data: "json, name=divider" })
  divider?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=grid" })
  grid?: GoogleAppsCardV1Grid;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleAppsCardV1Image;

  @SpeakeasyMetadata({ data: "json, name=selectionInput" })
  selectionInput?: GoogleAppsCardV1SelectionInput;

  @SpeakeasyMetadata({ data: "json, name=textInput" })
  textInput?: GoogleAppsCardV1TextInput;

  @SpeakeasyMetadata({ data: "json, name=textParagraph" })
  textParagraph?: GoogleAppsCardV1TextParagraph;
}
