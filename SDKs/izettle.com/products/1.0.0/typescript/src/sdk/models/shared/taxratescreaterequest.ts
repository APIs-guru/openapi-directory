import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaxRate } from "./taxrate";



export class TaxRatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxRates", elemType: TaxRate })
  taxRates: TaxRate[];
}
