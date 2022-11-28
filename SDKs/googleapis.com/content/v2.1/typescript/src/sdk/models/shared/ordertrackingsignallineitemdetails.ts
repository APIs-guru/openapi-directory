import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrderTrackingSignalLineItemDetails
/** 
 * The line items of the order.
**/
export class OrderTrackingSignalLineItemDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=mpn" })
  mpn?: string;

  @SpeakeasyMetadata({ data: "json, name=productDescription" })
  productDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=upc" })
  upc?: string;
}
