import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomAttribute } from "./customattribute";
import { Price } from "./price";
import { Price } from "./price";


// LocalInventory
/** 
 * Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
**/
export class LocalInventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability" })
  availability?: string;

  @Metadata({ data: "json, name=customAttributes", elemType: shared.CustomAttribute })
  customAttributes?: CustomAttribute[];

  @Metadata({ data: "json, name=instoreProductLocation" })
  instoreProductLocation?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pickupMethod" })
  pickupMethod?: string;

  @Metadata({ data: "json, name=pickupSla" })
  pickupSla?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=salePrice" })
  salePrice?: Price;

  @Metadata({ data: "json, name=salePriceEffectiveDate" })
  salePriceEffectiveDate?: string;

  @Metadata({ data: "json, name=storeCode" })
  storeCode?: string;
}
