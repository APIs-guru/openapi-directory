import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderLegacyPromotionBenefit } from "./orderlegacypromotionbenefit";



export class OrderLegacyPromotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benefits", elemType: OrderLegacyPromotionBenefit })
  benefits?: OrderLegacyPromotionBenefit[];

  @SpeakeasyMetadata({ data: "json, name=effectiveDates" })
  effectiveDates?: string;

  @SpeakeasyMetadata({ data: "json, name=genericRedemptionCode" })
  genericRedemptionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=longTitle" })
  longTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=productApplicability" })
  productApplicability?: string;

  @SpeakeasyMetadata({ data: "json, name=redemptionChannel" })
  redemptionChannel?: string;
}
