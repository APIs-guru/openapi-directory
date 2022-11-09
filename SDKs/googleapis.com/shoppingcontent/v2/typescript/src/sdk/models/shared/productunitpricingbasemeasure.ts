import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductUnitPricingBaseMeasure extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
