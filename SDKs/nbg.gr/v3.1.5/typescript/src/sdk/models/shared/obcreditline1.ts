import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalLimitType1CodeEnum } from "./obexternallimittype1codeenum";


export class ObCreditLine1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=Included" })
  included: boolean;

  @Metadata({ data: "json, name=Type" })
  type?: ObExternalLimitType1CodeEnum;
}
