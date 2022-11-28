import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductShippingWeight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
