import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudChannelV1Price
/** 
 * Represents the price of the Offer.
**/
export class GoogleCloudChannelV1Price extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basePrice" })
  basePrice?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=effectivePrice" })
  effectivePrice?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=externalPriceUri" })
  externalPriceUri?: string;
}
