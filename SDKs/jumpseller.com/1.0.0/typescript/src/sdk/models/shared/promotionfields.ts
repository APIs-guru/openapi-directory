import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PromotionFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=begins_at" })
  beginsAt?: string;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: any[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=condition_price" })
  conditionPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=condition_qty" })
  conditionQty?: number;

  @SpeakeasyMetadata({ data: "json, name=cumulative" })
  cumulative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customer_categories" })
  customerCategories?: any[];

  @SpeakeasyMetadata({ data: "json, name=discount_amount_fix" })
  discountAmountFix?: number;

  @SpeakeasyMetadata({ data: "json, name=discount_amount_percent" })
  discountAmountPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=discount_target" })
  discountTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lasts" })
  lasts?: string;

  @SpeakeasyMetadata({ data: "json, name=max_times_used" })
  maxTimesUsed?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: any[];

  @SpeakeasyMetadata({ data: "json, name=products_x" })
  productsX?: any[];

  @SpeakeasyMetadata({ data: "json, name=quantity_x" })
  quantityX?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=times_used" })
  timesUsed?: number;
}
