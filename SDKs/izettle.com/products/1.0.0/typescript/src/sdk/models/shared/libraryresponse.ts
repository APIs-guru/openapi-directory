import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiscountResponse } from "./discountresponse";
import { ProductResponse } from "./productresponse";



export class LibraryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedDiscounts" })
  deletedDiscounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=deletedProducts" })
  deletedProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=discounts", elemType: DiscountResponse })
  discounts?: DiscountResponse[];

  @SpeakeasyMetadata({ data: "json, name=fromEventLogUuid" })
  fromEventLogUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: ProductResponse })
  products?: ProductResponse[];

  @SpeakeasyMetadata({ data: "json, name=untilEventLogUuid" })
  untilEventLogUuid?: string;
}
