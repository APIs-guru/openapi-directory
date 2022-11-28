import { SpeakeasyBase } from "../../../internal/utils";
import { OpaqueColor } from "./opaquecolor";
/**
 * A color and position in a gradient band.
**/
export declare class ColorStop extends SpeakeasyBase {
    alpha?: number;
    color?: OpaqueColor;
    position?: number;
}
