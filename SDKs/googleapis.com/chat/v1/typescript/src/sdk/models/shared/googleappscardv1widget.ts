import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1ButtonList } from "./googleappscardv1buttonlist";
import { GoogleAppsCardV1DateTimePicker } from "./googleappscardv1datetimepicker";
import { GoogleAppsCardV1DecoratedText } from "./googleappscardv1decoratedtext";
import { GoogleAppsCardV1Grid } from "./googleappscardv1grid";
import { GoogleAppsCardV1Image } from "./googleappscardv1image";
import { GoogleAppsCardV1SelectionInput } from "./googleappscardv1selectioninput";
import { GoogleAppsCardV1TextInput } from "./googleappscardv1textinput";
import { GoogleAppsCardV1TextParagraph } from "./googleappscardv1textparagraph";

export enum GoogleAppsCardV1WidgetHorizontalAlignmentEnum {
    HorizontalAlignmentUnspecified = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
,    Start = "START"
,    Center = "CENTER"
,    End = "END"
}


// GoogleAppsCardV1Widget
/** 
 * A widget is a UI element that presents texts, images, etc.
**/
export class GoogleAppsCardV1Widget extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttonList" })
  buttonList?: GoogleAppsCardV1ButtonList;

  @Metadata({ data: "json, name=dateTimePicker" })
  dateTimePicker?: GoogleAppsCardV1DateTimePicker;

  @Metadata({ data: "json, name=decoratedText" })
  decoratedText?: GoogleAppsCardV1DecoratedText;

  @Metadata({ data: "json, name=divider" })
  divider?: Map<string, any>;

  @Metadata({ data: "json, name=grid" })
  grid?: GoogleAppsCardV1Grid;

  @Metadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: GoogleAppsCardV1WidgetHorizontalAlignmentEnum;

  @Metadata({ data: "json, name=image" })
  image?: GoogleAppsCardV1Image;

  @Metadata({ data: "json, name=selectionInput" })
  selectionInput?: GoogleAppsCardV1SelectionInput;

  @Metadata({ data: "json, name=textInput" })
  textInput?: GoogleAppsCardV1TextInput;

  @Metadata({ data: "json, name=textParagraph" })
  textParagraph?: GoogleAppsCardV1TextParagraph;
}
