import { SpeakeasyBase } from "../../../internal/utils";
import { Quaternion } from "./quaternion";
export declare enum PresentationParamsColorSpaceEnum {
    Unknown = "UNKNOWN",
    Linear = "LINEAR",
    Gamma = "GAMMA"
}
/**
 * Hints for displaying the asset, based on information available when the asset was uploaded.
**/
export declare class PresentationParams extends SpeakeasyBase {
    backgroundColor?: string;
    colorSpace?: PresentationParamsColorSpaceEnum;
    orientingRotation?: Quaternion;
}
