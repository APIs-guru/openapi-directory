import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PromotionFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=begins_at" })
  beginsAt?: string;

  @Metadata({ data: "json, name=categories" })
  categories?: any[];

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=condition_price" })
  conditionPrice?: number;

  @Metadata({ data: "json, name=condition_qty" })
  conditionQty?: number;

  @Metadata({ data: "json, name=cumulative" })
  cumulative?: boolean;

  @Metadata({ data: "json, name=customer_categories" })
  customerCategories?: any[];

  @Metadata({ data: "json, name=discount_amount_fix" })
  discountAmountFix?: number;

  @Metadata({ data: "json, name=discount_amount_percent" })
  discountAmountPercent?: number;

  @Metadata({ data: "json, name=discount_target" })
  discountTarget?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lasts" })
  lasts?: string;

  @Metadata({ data: "json, name=max_times_used" })
  maxTimesUsed?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=products" })
  products?: any[];

  @Metadata({ data: "json, name=products_x" })
  productsX?: any[];

  @Metadata({ data: "json, name=quantity_x" })
  quantityX?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=times_used" })
  timesUsed?: number;
}
