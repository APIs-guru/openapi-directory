import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BestSold extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=product_id" })
  productId?: number;

  @Metadata({ data: "json, name=product_name" })
  productName?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
