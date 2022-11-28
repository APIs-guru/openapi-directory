import { SpeakeasyBase } from "../../../internal/utils";
import { EstimationTimePoint } from "./estimationtimepoint";
import { Rate } from "./rate";
/**
 * The price of a SKU at a point int time.
**/
export declare class Price extends SpeakeasyBase {
    effectiveTime?: EstimationTimePoint;
    priceType?: string;
    rate?: Rate;
}
