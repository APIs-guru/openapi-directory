import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class OrderLegacyPromotionBenefit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: Price;

  @SpeakeasyMetadata({ data: "json, name=offerIds" })
  offerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: string;

  @SpeakeasyMetadata({ data: "json, name=taxImpact" })
  taxImpact?: Price;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
