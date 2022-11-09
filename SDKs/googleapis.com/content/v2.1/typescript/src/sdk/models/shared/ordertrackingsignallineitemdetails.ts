import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderTrackingSignalLineItemDetails
/** 
 * The line items of the order.
**/
export class OrderTrackingSignalLineItemDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=gtin" })
  gtin?: string;

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=mpn" })
  mpn?: string;

  @Metadata({ data: "json, name=productDescription" })
  productDescription?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=upc" })
  upc?: string;
}
