import { SpeakeasyBase } from "../../../internal/utils";
import { InfoTypeTransformation } from "./infotypetransformation";
export declare enum TextConfigProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    Empty = "EMPTY",
    Basic = "BASIC"
}
/**
 * Configures how to transform sensitive text `InfoTypes`.
**/
export declare class TextConfig extends SpeakeasyBase {
    additionalTransformations?: InfoTypeTransformation[];
    excludeInfoTypes?: string[];
    profileType?: TextConfigProfileTypeEnum;
    transformations?: InfoTypeTransformation[];
}
