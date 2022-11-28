import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
import { Price } from "./price";



// LocalInventory
/** 
 * Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
**/
export class LocalInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: string;

  @SpeakeasyMetadata({ data: "json, name=customAttributes", elemType: CustomAttribute })
  customAttributes?: CustomAttribute[];

  @SpeakeasyMetadata({ data: "json, name=instoreProductLocation" })
  instoreProductLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupMethod" })
  pickupMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupSla" })
  pickupSla?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Price;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=salePrice" })
  salePrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=salePriceEffectiveDate" })
  salePriceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string;
}
