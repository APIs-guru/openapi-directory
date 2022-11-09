import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Conditions } from "./googleprivacydlpv2conditions";

export enum GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum {
    LogicalOperatorUnspecified = "LOGICAL_OPERATOR_UNSPECIFIED"
,    And = "AND"
}


// GooglePrivacyDlpV2Expressions
/** 
 * An expression, consisting of an operator and conditions.
**/
export class GooglePrivacyDlpV2Expressions extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions" })
  conditions?: GooglePrivacyDlpV2Conditions;

  @Metadata({ data: "json, name=logicalOperator" })
  logicalOperator?: GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum;
}
