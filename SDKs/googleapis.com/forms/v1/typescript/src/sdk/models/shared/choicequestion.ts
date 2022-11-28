import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionInput } from "./option";
import { Option } from "./option";


export enum ChoiceQuestionTypeEnum {
    ChoiceTypeUnspecified = "CHOICE_TYPE_UNSPECIFIED",
    Radio = "RADIO",
    Checkbox = "CHECKBOX",
    DropDown = "DROP_DOWN"
}


// ChoiceQuestionInput
/** 
 * A radio/checkbox/dropdown question.
**/
export class ChoiceQuestionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: OptionInput })
  options?: OptionInput[];

  @SpeakeasyMetadata({ data: "json, name=shuffle" })
  shuffle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChoiceQuestionTypeEnum;
}


// ChoiceQuestion
/** 
 * A radio/checkbox/dropdown question.
**/
export class ChoiceQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: Option })
  options?: Option[];

  @SpeakeasyMetadata({ data: "json, name=shuffle" })
  shuffle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChoiceQuestionTypeEnum;
}
