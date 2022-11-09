import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";

export enum GooglePrivacyDlpV2ConditionOperatorEnum {
    RelationalOperatorUnspecified = "RELATIONAL_OPERATOR_UNSPECIFIED"
,    EqualTo = "EQUAL_TO"
,    NotEqualTo = "NOT_EQUAL_TO"
,    GreaterThan = "GREATER_THAN"
,    LessThan = "LESS_THAN"
,    GreaterThanOrEquals = "GREATER_THAN_OR_EQUALS"
,    LessThanOrEquals = "LESS_THAN_OR_EQUALS"
,    Exists = "EXISTS"
}


// GooglePrivacyDlpV2Condition
/** 
 * The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false.
**/
export class GooglePrivacyDlpV2Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;

  @Metadata({ data: "json, name=operator" })
  operator?: GooglePrivacyDlpV2ConditionOperatorEnum;

  @Metadata({ data: "json, name=value" })
  value?: GooglePrivacyDlpV2Value;
}
