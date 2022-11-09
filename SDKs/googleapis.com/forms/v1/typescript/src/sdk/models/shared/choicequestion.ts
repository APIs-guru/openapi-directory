import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Option } from "./option";

export enum ChoiceQuestionTypeEnum {
    ChoiceTypeUnspecified = "CHOICE_TYPE_UNSPECIFIED"
,    Radio = "RADIO"
,    Checkbox = "CHECKBOX"
,    DropDown = "DROP_DOWN"
}


// ChoiceQuestion
/** 
 * A radio/checkbox/dropdown question.
**/
export class ChoiceQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: shared.Option })
  options?: Option[];

  @Metadata({ data: "json, name=shuffle" })
  shuffle?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: ChoiceQuestionTypeEnum;
}
