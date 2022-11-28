import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BestSold extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId?: number;

  @SpeakeasyMetadata({ data: "json, name=product_name" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
