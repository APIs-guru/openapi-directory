import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { Price } from "./price";


export class OrderLegacyPromotionBenefit extends SpeakeasyBase {
  @Metadata({ data: "json, name=discount" })
  discount?: Price;

  @Metadata({ data: "json, name=offerIds" })
  offerIds?: string[];

  @Metadata({ data: "json, name=subType" })
  subType?: string;

  @Metadata({ data: "json, name=taxImpact" })
  taxImpact?: Price;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
