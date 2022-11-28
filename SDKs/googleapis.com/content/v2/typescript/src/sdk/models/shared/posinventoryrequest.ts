import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class PosInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Price;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
