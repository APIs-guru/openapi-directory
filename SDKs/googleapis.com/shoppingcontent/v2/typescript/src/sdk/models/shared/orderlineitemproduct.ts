import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemProductFee } from "./orderlineitemproductfee";
import { Price } from "./price";
import { OrderLineItemProductVariantAttribute } from "./orderlineitemproductvariantattribute";



export class OrderLineItemProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=fees", elemType: OrderLineItemProductFee })
  fees?: OrderLineItemProductFee[];

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageLink" })
  imageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=mpn" })
  mpn?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Price;

  @SpeakeasyMetadata({ data: "json, name=shownImage" })
  shownImage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=variantAttributes", elemType: OrderLineItemProductVariantAttribute })
  variantAttributes?: OrderLineItemProductVariantAttribute[];
}
