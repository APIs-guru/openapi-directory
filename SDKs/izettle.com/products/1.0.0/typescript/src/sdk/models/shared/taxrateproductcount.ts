import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxRateProductCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=taxRateUuid" })
  taxRateUuid?: string;
}
