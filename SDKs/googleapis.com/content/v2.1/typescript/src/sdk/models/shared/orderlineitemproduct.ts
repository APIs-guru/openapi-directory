import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderLineItemProductFee } from "./orderlineitemproductfee";
import { Price } from "./price";
import { OrderLineItemProductVariantAttribute } from "./orderlineitemproductvariantattribute";


export class OrderLineItemProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @Metadata({ data: "json, name=fees", elemType: shared.OrderLineItemProductFee })
  fees?: OrderLineItemProductFee[];

  @Metadata({ data: "json, name=gtin" })
  gtin?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageLink" })
  imageLink?: string;

  @Metadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @Metadata({ data: "json, name=mpn" })
  mpn?: string;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=shownImage" })
  shownImage?: string;

  @Metadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=variantAttributes", elemType: shared.OrderLineItemProductVariantAttribute })
  variantAttributes?: OrderLineItemProductVariantAttribute[];
}
