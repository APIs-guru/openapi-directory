import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaxRate } from "./taxrate";



export class TaxRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxRates", elemType: TaxRate })
  taxRates?: TaxRate[];
}
