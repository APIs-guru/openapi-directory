import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1ButtonList } from "./googleappscardv1buttonlist";
import { GoogleAppsCardV1DateTimePicker } from "./googleappscardv1datetimepicker";
import { GoogleAppsCardV1DecoratedText } from "./googleappscardv1decoratedtext";
import { GoogleAppsCardV1Grid } from "./googleappscardv1grid";
import { GoogleAppsCardV1Image } from "./googleappscardv1image";
import { GoogleAppsCardV1SelectionInput } from "./googleappscardv1selectioninput";
import { GoogleAppsCardV1TextInput } from "./googleappscardv1textinput";
import { GoogleAppsCardV1TextParagraph } from "./googleappscardv1textparagraph";
/**
 * Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.
**/
export declare class GoogleAppsCardV1Widget extends SpeakeasyBase {
    buttonList?: GoogleAppsCardV1ButtonList;
    dateTimePicker?: GoogleAppsCardV1DateTimePicker;
    decoratedText?: GoogleAppsCardV1DecoratedText;
    divider?: Map<string, any>;
    grid?: GoogleAppsCardV1Grid;
    image?: GoogleAppsCardV1Image;
    selectionInput?: GoogleAppsCardV1SelectionInput;
    textInput?: GoogleAppsCardV1TextInput;
    textParagraph?: GoogleAppsCardV1TextParagraph;
}
