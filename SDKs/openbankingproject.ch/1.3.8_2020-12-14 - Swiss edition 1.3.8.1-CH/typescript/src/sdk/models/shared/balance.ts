import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { BalanceTypeEnum } from "./balancetypeenum";


// Balance
/** 
 * A single balance element.
 * 
**/
export class Balance extends SpeakeasyBase {
  @Metadata({ data: "json, name=balanceAmount" })
  balanceAmount: Amount;

  @Metadata({ data: "json, name=balanceType" })
  balanceType: BalanceTypeEnum;

  @Metadata({ data: "json, name=creditLimitIncluded" })
  creditLimitIncluded?: boolean;

  @Metadata({ data: "json, name=lastChangeDateTime" })
  lastChangeDateTime?: Date;

  @Metadata({ data: "json, name=lastCommittedTransaction" })
  lastCommittedTransaction?: string;

  @Metadata({ data: "json, name=referenceDate" })
  referenceDate?: Date;
}
