import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductOptionValueEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;
}
