import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaxRate } from "./taxrate";


export class TaxRatesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxRates", elemType: shared.TaxRate })
  taxRates: TaxRate[];
}
