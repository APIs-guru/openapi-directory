import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Conditions } from "./googleprivacydlpv2conditions";
export declare enum GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum {
    LogicalOperatorUnspecified = "LOGICAL_OPERATOR_UNSPECIFIED",
    And = "AND"
}
/**
 * An expression, consisting of an operator and conditions.
**/
export declare class GooglePrivacyDlpV2Expressions extends SpeakeasyBase {
    conditions?: GooglePrivacyDlpV2Conditions;
    logicalOperator?: GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum;
}
