import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RestoreTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Untrash = "UNTRASH"
}
/**
 * A deleted object was restored.
**/
export declare class Restore extends SpeakeasyBase {
    type?: RestoreTypeEnum;
}
