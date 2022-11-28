import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.
**/
export declare class DeliveryAreaPostalCodeRange extends SpeakeasyBase {
    firstPostalCode?: string;
    lastPostalCode?: string;
}
