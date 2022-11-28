import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
**/
export declare class FreeFormServiceItem extends SpeakeasyBase {
    category?: string;
    label?: Label;
}
