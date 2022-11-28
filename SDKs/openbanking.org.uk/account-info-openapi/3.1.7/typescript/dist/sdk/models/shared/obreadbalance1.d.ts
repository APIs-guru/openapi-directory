import { SpeakeasyBase } from "../../../internal/utils";
import { ObCreditDebitCode2Enum } from "./obcreditdebitcode2enum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Amount of money of the cash balance.
**/
export declare class ObReadBalance1DataBalanceAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Amount of money of the credit line.
**/
export declare class ObReadBalance1DataBalanceCreditLineAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare enum ObReadBalance1DataBalanceCreditLineTypeEnum {
    Available = "Available",
    Credit = "Credit",
    Emergency = "Emergency",
    PreAgreed = "Pre-Agreed",
    Temporary = "Temporary"
}
/**
 * Set of elements used to provide details on the credit line.
**/
export declare class ObReadBalance1DataBalanceCreditLine extends SpeakeasyBase {
    amount?: ObReadBalance1DataBalanceCreditLineAmount;
    included: boolean;
    type?: ObReadBalance1DataBalanceCreditLineTypeEnum;
}
/**
 * Set of elements used to define the balance details.
**/
export declare class ObReadBalance1DataBalance extends SpeakeasyBase {
    accountId: string;
    amount: ObReadBalance1DataBalanceAmount;
    creditDebitIndicator: ObCreditDebitCode2Enum;
    creditLine?: ObReadBalance1DataBalanceCreditLine[];
    dateTime: Date;
    type: ObBalanceType1CodeEnum;
}
export declare class ObReadBalance1Data extends SpeakeasyBase {
    balance: ObReadBalance1DataBalance[];
}
export declare class ObReadBalance1 extends SpeakeasyBase {
    data: ObReadBalance1Data;
    links?: Links;
    meta?: Meta;
}
