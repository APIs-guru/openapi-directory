import { SpeakeasyBase } from "../../../internal/utils";
import { OpaqueColor } from "./opaquecolor";
/**
 * A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
**/
export declare class SolidFill extends SpeakeasyBase {
    alpha?: number;
    color?: OpaqueColor;
}
