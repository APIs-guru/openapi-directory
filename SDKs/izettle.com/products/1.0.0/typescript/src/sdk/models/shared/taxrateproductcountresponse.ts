import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaxRateProductCount } from "./taxrateproductcount";


export class TaxRateProductCountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=counts", elemType: shared.TaxRateProductCount })
  counts?: TaxRateProductCount[];
}
