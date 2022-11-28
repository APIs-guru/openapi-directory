import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * Represents the price of the Offer.
**/
export declare class GoogleCloudChannelV1Price extends SpeakeasyBase {
    basePrice?: GoogleTypeMoney;
    discount?: number;
    effectivePrice?: GoogleTypeMoney;
    externalPriceUri?: string;
}
