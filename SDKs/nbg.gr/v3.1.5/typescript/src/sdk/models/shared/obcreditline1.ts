import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalLimitType1CodeEnum } from "./obexternallimittype1codeenum";



export class ObCreditLine1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=Included" })
  included: boolean;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ObExternalLimitType1CodeEnum;
}
