import { SpeakeasyBase } from "../../../internal/utils";
import { OptionInput } from "./option";
import { Option } from "./option";
export declare enum ChoiceQuestionTypeEnum {
    ChoiceTypeUnspecified = "CHOICE_TYPE_UNSPECIFIED",
    Radio = "RADIO",
    Checkbox = "CHECKBOX",
    DropDown = "DROP_DOWN"
}
/**
 * A radio/checkbox/dropdown question.
**/
export declare class ChoiceQuestionInput extends SpeakeasyBase {
    options?: OptionInput[];
    shuffle?: boolean;
    type?: ChoiceQuestionTypeEnum;
}
/**
 * A radio/checkbox/dropdown question.
**/
export declare class ChoiceQuestion extends SpeakeasyBase {
    options?: Option[];
    shuffle?: boolean;
    type?: ChoiceQuestionTypeEnum;
}
