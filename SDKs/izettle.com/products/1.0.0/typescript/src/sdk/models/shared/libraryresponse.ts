import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DiscountResponse } from "./discountresponse";
import { ProductResponse } from "./productresponse";


export class LibraryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedDiscounts" })
  deletedDiscounts?: string[];

  @Metadata({ data: "json, name=deletedProducts" })
  deletedProducts?: string[];

  @Metadata({ data: "json, name=discounts", elemType: shared.DiscountResponse })
  discounts?: DiscountResponse[];

  @Metadata({ data: "json, name=fromEventLogUuid" })
  fromEventLogUuid?: string;

  @Metadata({ data: "json, name=products", elemType: shared.ProductResponse })
  products?: ProductResponse[];

  @Metadata({ data: "json, name=untilEventLogUuid" })
  untilEventLogUuid?: string;
}
