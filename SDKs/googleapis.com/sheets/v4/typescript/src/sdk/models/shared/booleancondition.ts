import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConditionValue } from "./conditionvalue";

export enum BooleanConditionTypeEnum {
    ConditionTypeUnspecified = "CONDITION_TYPE_UNSPECIFIED"
,    NumberGreater = "NUMBER_GREATER"
,    NumberGreaterThanEq = "NUMBER_GREATER_THAN_EQ"
,    NumberLess = "NUMBER_LESS"
,    NumberLessThanEq = "NUMBER_LESS_THAN_EQ"
,    NumberEq = "NUMBER_EQ"
,    NumberNotEq = "NUMBER_NOT_EQ"
,    NumberBetween = "NUMBER_BETWEEN"
,    NumberNotBetween = "NUMBER_NOT_BETWEEN"
,    TextContains = "TEXT_CONTAINS"
,    TextNotContains = "TEXT_NOT_CONTAINS"
,    TextStartsWith = "TEXT_STARTS_WITH"
,    TextEndsWith = "TEXT_ENDS_WITH"
,    TextEq = "TEXT_EQ"
,    TextIsEmail = "TEXT_IS_EMAIL"
,    TextIsUrl = "TEXT_IS_URL"
,    DateEq = "DATE_EQ"
,    DateBefore = "DATE_BEFORE"
,    DateAfter = "DATE_AFTER"
,    DateOnOrBefore = "DATE_ON_OR_BEFORE"
,    DateOnOrAfter = "DATE_ON_OR_AFTER"
,    DateBetween = "DATE_BETWEEN"
,    DateNotBetween = "DATE_NOT_BETWEEN"
,    DateIsValid = "DATE_IS_VALID"
,    OneOfRange = "ONE_OF_RANGE"
,    OneOfList = "ONE_OF_LIST"
,    Blank = "BLANK"
,    NotBlank = "NOT_BLANK"
,    CustomFormula = "CUSTOM_FORMULA"
,    Boolean = "BOOLEAN"
,    TextNotEq = "TEXT_NOT_EQ"
,    DateNotEq = "DATE_NOT_EQ"
}


// BooleanCondition
/** 
 * A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.
**/
export class BooleanCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: BooleanConditionTypeEnum;

  @Metadata({ data: "json, name=values", elemType: shared.ConditionValue })
  values?: ConditionValue[];
}
