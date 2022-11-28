import { SpeakeasyBase } from "../../../internal/utils";
import { Audio } from "./audio";
import { Color } from "./color";
import { Crop } from "./crop";
import { Deblock } from "./deblock";
import { Denoise } from "./denoise";
import { Pad } from "./pad";
/**
 * Preprocessing configurations.
**/
export declare class PreprocessingConfig extends SpeakeasyBase {
    audio?: Audio;
    color?: Color;
    crop?: Crop;
    deblock?: Deblock;
    denoise?: Denoise;
    pad?: Pad;
}
