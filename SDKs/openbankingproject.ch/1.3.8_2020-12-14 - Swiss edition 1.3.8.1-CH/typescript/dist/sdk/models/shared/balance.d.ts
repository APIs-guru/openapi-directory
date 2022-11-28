import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { BalanceTypeEnum } from "./balancetypeenum";
/**
 * A single balance element.
 *
**/
export declare class Balance extends SpeakeasyBase {
    balanceAmount: Amount;
    balanceType: BalanceTypeEnum;
    creditLimitIncluded?: boolean;
    lastChangeDateTime?: Date;
    lastCommittedTransaction?: string;
    referenceDate?: Date;
}
