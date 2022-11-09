import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderPromotionItem } from "./orderpromotionitem";
import { OrderPromotionItem } from "./orderpromotionitem";
import { Price } from "./price";
import { Price } from "./price";


export class OrderPromotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicableItems", elemType: shared.OrderPromotionItem })
  applicableItems?: OrderPromotionItem[];

  @Metadata({ data: "json, name=appliedItems", elemType: shared.OrderPromotionItem })
  appliedItems?: OrderPromotionItem[];

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=funder" })
  funder?: string;

  @Metadata({ data: "json, name=merchantPromotionId" })
  merchantPromotionId?: string;

  @Metadata({ data: "json, name=priceValue" })
  priceValue?: Price;

  @Metadata({ data: "json, name=shortTitle" })
  shortTitle?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=subtype" })
  subtype?: string;

  @Metadata({ data: "json, name=taxValue" })
  taxValue?: Price;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
