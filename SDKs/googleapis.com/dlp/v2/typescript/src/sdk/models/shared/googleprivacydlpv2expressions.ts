import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Conditions } from "./googleprivacydlpv2conditions";


export enum GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum {
    LogicalOperatorUnspecified = "LOGICAL_OPERATOR_UNSPECIFIED",
    And = "AND"
}


// GooglePrivacyDlpV2Expressions
/** 
 * An expression, consisting of an operator and conditions.
**/
export class GooglePrivacyDlpV2Expressions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: GooglePrivacyDlpV2Conditions;

  @SpeakeasyMetadata({ data: "json, name=logicalOperator" })
  logicalOperator?: GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum;
}
