import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderPromotionItem } from "./orderpromotionitem";
import { Price } from "./price";



export class OrderPromotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicableItems", elemType: OrderPromotionItem })
  applicableItems?: OrderPromotionItem[];

  @SpeakeasyMetadata({ data: "json, name=appliedItems", elemType: OrderPromotionItem })
  appliedItems?: OrderPromotionItem[];

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=funder" })
  funder?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantPromotionId" })
  merchantPromotionId?: string;

  @SpeakeasyMetadata({ data: "json, name=priceValue" })
  priceValue?: Price;

  @SpeakeasyMetadata({ data: "json, name=shortTitle" })
  shortTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=taxValue" })
  taxValue?: Price;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
