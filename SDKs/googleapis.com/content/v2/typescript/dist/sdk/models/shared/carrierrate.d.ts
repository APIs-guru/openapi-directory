import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class CarrierRate extends SpeakeasyBase {
    carrierName?: string;
    carrierService?: string;
    flatAdjustment?: Price;
    name?: string;
    originPostalCode?: string;
    percentageAdjustment?: string;
}
