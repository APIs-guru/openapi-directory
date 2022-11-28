import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ObActiveOrHistoricCurrencyAndAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}
