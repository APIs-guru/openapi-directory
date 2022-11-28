import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedValue } from "./extendedvalue";
/**
 * Metadata about a value in a pivot grouping.
**/
export declare class PivotGroupValueMetadata extends SpeakeasyBase {
    collapsed?: boolean;
    value?: ExtendedValue;
}
