import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaxRateProductCount } from "./taxrateproductcount";



export class TaxRateProductCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=counts", elemType: TaxRateProductCount })
  counts?: TaxRateProductCount[];
}
