import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
