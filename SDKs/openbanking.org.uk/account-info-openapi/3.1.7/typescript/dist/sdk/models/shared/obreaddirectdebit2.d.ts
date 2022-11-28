import { SpeakeasyBase } from "../../../internal/utils";
import { ObExternalDirectDebitStatus1CodeEnum } from "./obexternaldirectdebitstatus1codeenum";
import { ObActiveOrHistoricCurrencyAndAmount0 } from "./obactiveorhistoriccurrencyandamount0";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Account to or from which a cash entry is made.
**/
export declare class ObReadDirectDebit2DataDirectDebit extends SpeakeasyBase {
    accountId: string;
    directDebitId?: string;
    directDebitStatusCode?: ObExternalDirectDebitStatus1CodeEnum;
    frequency?: string;
    mandateIdentification: string;
    name: string;
    previousPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount0;
    previousPaymentDateTime?: Date;
}
export declare class ObReadDirectDebit2Data extends SpeakeasyBase {
    directDebit?: ObReadDirectDebit2DataDirectDebit[];
}
export declare class ObReadDirectDebit2 extends SpeakeasyBase {
    data: ObReadDirectDebit2Data;
    links?: Links;
    meta?: Meta;
}
