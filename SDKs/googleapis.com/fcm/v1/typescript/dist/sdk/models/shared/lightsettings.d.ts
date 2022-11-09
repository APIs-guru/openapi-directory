import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
/**
 * Settings to control notification LED.
**/
export declare class LightSettings extends SpeakeasyBase {
    color?: Color;
    lightOffDuration?: string;
    lightOnDuration?: string;
}
