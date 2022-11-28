import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObCreditDebitCode2Enum } from "./obcreditdebitcode2enum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";
import { Links } from "./links";
import { Meta } from "./meta";



// ObReadBalance1DataBalanceAmount
/** 
 * Amount of money of the cash balance.
**/
export class ObReadBalance1DataBalanceAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObReadBalance1DataBalanceCreditLineAmount
/** 
 * Amount of money of the credit line.
**/
export class ObReadBalance1DataBalanceCreditLineAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObReadBalance1DataBalanceCreditLineTypeEnum {
    Available = "Available",
    Credit = "Credit",
    Emergency = "Emergency",
    PreAgreed = "Pre-Agreed",
    Temporary = "Temporary"
}


// ObReadBalance1DataBalanceCreditLine
/** 
 * Set of elements used to provide details on the credit line.
**/
export class ObReadBalance1DataBalanceCreditLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: ObReadBalance1DataBalanceCreditLineAmount;

  @SpeakeasyMetadata({ data: "json, name=Included" })
  included: boolean;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ObReadBalance1DataBalanceCreditLineTypeEnum;
}


// ObReadBalance1DataBalance
/** 
 * Set of elements used to define the balance details.
**/
export class ObReadBalance1DataBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObReadBalance1DataBalanceAmount;

  @SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode2Enum;

  @SpeakeasyMetadata({ data: "json, name=CreditLine", elemType: ObReadBalance1DataBalanceCreditLine })
  creditLine?: ObReadBalance1DataBalanceCreditLine[];

  @SpeakeasyMetadata({ data: "json, name=DateTime" })
  dateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ObBalanceType1CodeEnum;
}


export class ObReadBalance1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Balance", elemType: ObReadBalance1DataBalance })
  balance: ObReadBalance1DataBalance[];
}


export class ObReadBalance1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadBalance1Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
