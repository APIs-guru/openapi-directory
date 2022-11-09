import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ObActiveOrHistoricCurrencyAndAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}
