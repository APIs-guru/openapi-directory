import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
**/
export declare class Value extends SpeakeasyBase {
    carrierRateName?: string;
    flatRate?: Price;
    noShipping?: boolean;
    pricePercentage?: string;
    subtableName?: string;
}
