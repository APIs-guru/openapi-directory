import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeMoney } from "./googletypemoney";
import { GoogleTypeMoney } from "./googletypemoney";


// GoogleCloudChannelV1Price
/** 
 * Represents the price of the Offer.
**/
export class GoogleCloudChannelV1Price extends SpeakeasyBase {
  @Metadata({ data: "json, name=basePrice" })
  basePrice?: GoogleTypeMoney;

  @Metadata({ data: "json, name=discount" })
  discount?: number;

  @Metadata({ data: "json, name=effectivePrice" })
  effectivePrice?: GoogleTypeMoney;

  @Metadata({ data: "json, name=externalPriceUri" })
  externalPriceUri?: string;
}
