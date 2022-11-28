import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Updates the number of pinned table header rows in a table.
**/
export declare class PinTableHeaderRowsRequest extends SpeakeasyBase {
    pinnedHeaderRowsCount?: number;
    tableStartLocation?: Location;
}
