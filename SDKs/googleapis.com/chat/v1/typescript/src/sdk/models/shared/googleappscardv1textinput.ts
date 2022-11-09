import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
import { GoogleAppsCardV1Suggestions } from "./googleappscardv1suggestions";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";

export enum GoogleAppsCardV1TextInputTypeEnum {
    SingleLine = "SINGLE_LINE"
,    MultipleLine = "MULTIPLE_LINE"
}


// GoogleAppsCardV1TextInput
/** 
 * A text input is a UI item where users can input text. A text input can also have an onChange action and suggestions.
**/
export class GoogleAppsCardV1TextInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoCompleteAction" })
  autoCompleteAction?: GoogleAppsCardV1Action;

  @Metadata({ data: "json, name=hintText" })
  hintText?: string;

  @Metadata({ data: "json, name=initialSuggestions" })
  initialSuggestions?: GoogleAppsCardV1Suggestions;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onChangeAction" })
  onChangeAction?: GoogleAppsCardV1Action;

  @Metadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1TextInputTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
