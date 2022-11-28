import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class ProductShipping extends SpeakeasyBase {
    country?: string;
    locationGroupName?: string;
    locationId?: string;
    maxHandlingTime?: string;
    maxTransitTime?: string;
    minHandlingTime?: string;
    minTransitTime?: string;
    postalCode?: string;
    price?: Price;
    region?: string;
    service?: string;
}
