import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliverByDate" })
  deliverByDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipByDate" })
  shipByDate?: string;
}
