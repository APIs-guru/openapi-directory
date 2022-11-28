import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxRateProductCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateUuid" })
  taxRateUuid?: string;
}
