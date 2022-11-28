import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyReference } from "./propertyreference";
export declare enum PropertyOrderDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * The desired order for a specific property.
**/
export declare class PropertyOrder extends SpeakeasyBase {
    direction?: PropertyOrderDirectionEnum;
    property?: PropertyReference;
}
