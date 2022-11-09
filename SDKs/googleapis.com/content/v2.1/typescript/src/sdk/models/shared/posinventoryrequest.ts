import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class PosInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @Metadata({ data: "json, name=gtin" })
  gtin?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @Metadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
