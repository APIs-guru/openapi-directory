import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderLegacyPromotionBenefit } from "./orderlegacypromotionbenefit";


export class OrderLegacyPromotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=benefits", elemType: shared.OrderLegacyPromotionBenefit })
  benefits?: OrderLegacyPromotionBenefit[];

  @Metadata({ data: "json, name=effectiveDates" })
  effectiveDates?: string;

  @Metadata({ data: "json, name=genericRedemptionCode" })
  genericRedemptionCode?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=longTitle" })
  longTitle?: string;

  @Metadata({ data: "json, name=productApplicability" })
  productApplicability?: string;

  @Metadata({ data: "json, name=redemptionChannel" })
  redemptionChannel?: string;
}
