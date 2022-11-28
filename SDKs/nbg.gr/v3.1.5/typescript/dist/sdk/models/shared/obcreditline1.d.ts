import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalLimitType1CodeEnum } from "./obexternallimittype1codeenum";
export declare class ObCreditLine1 extends SpeakeasyBase {
    amount?: ObActiveOrHistoricCurrencyAndAmount;
    included: boolean;
    type?: ObExternalLimitType1CodeEnum;
}
