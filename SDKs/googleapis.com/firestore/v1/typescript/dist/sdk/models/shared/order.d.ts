import { SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";
export declare enum OrderDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * An order on a field.
**/
export declare class Order extends SpeakeasyBase {
    direction?: OrderDirectionEnum;
    field?: FieldReference;
}
