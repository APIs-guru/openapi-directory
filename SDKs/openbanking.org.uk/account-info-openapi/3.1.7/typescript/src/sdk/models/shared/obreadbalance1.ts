import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObCreditDebitCode2Enum } from "./obcreditdebitcode2enum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";
import { Links } from "./links";
import { Meta } from "./meta";


// ObReadBalance1DataBalanceAmount
/** 
 * Amount of money of the cash balance.
**/
export class ObReadBalance1DataBalanceAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObReadBalance1DataBalanceCreditLineAmount
/** 
 * Amount of money of the credit line.
**/
export class ObReadBalance1DataBalanceCreditLineAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObReadBalance1DataBalanceCreditLineTypeEnum {
    Available = "Available"
,    Credit = "Credit"
,    Emergency = "Emergency"
,    PreAgreed = "Pre-Agreed"
,    Temporary = "Temporary"
}


// ObReadBalance1DataBalanceCreditLine
/** 
 * Set of elements used to provide details on the credit line.
**/
export class ObReadBalance1DataBalanceCreditLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: ObReadBalance1DataBalanceCreditLineAmount;

  @Metadata({ data: "json, name=Included" })
  included: boolean;

  @Metadata({ data: "json, name=Type" })
  type?: ObReadBalance1DataBalanceCreditLineTypeEnum;
}


// ObReadBalance1DataBalance
/** 
 * Set of elements used to define the balance details.
**/
export class ObReadBalance1DataBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=Amount" })
  amount: ObReadBalance1DataBalanceAmount;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode2Enum;

  @Metadata({ data: "json, name=CreditLine", elemType: shared.ObReadBalance1DataBalanceCreditLine })
  creditLine?: ObReadBalance1DataBalanceCreditLine[];

  @Metadata({ data: "json, name=DateTime" })
  dateTime: Date;

  @Metadata({ data: "json, name=Type" })
  type: ObBalanceType1CodeEnum;
}


export class ObReadBalance1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Balance", elemType: shared.ObReadBalance1DataBalance })
  balance: ObReadBalance1DataBalance[];
}


export class ObReadBalance1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadBalance1Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
