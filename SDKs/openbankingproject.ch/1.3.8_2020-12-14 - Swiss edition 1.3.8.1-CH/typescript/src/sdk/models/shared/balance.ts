import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { BalanceTypeEnum } from "./balancetypeenum";



// Balance
/** 
 * A single balance element.
 * 
**/
export class Balance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balanceAmount" })
  balanceAmount: Amount;

  @SpeakeasyMetadata({ data: "json, name=balanceType" })
  balanceType: BalanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=creditLimitIncluded" })
  creditLimitIncluded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastChangeDateTime" })
  lastChangeDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastCommittedTransaction" })
  lastCommittedTransaction?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceDate" })
  referenceDate?: Date;
}
