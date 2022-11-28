import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderPromotionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
