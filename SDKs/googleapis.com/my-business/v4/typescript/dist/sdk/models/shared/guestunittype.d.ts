import { SpeakeasyBase } from "../../../internal/utils";
import { GuestUnitFeatures } from "./guestunitfeatures";
/**
 * A specific type of unit primarily defined by its features.
**/
export declare class GuestUnitType extends SpeakeasyBase {
    codes?: string[];
    features?: GuestUnitFeatures;
    label?: string;
}
