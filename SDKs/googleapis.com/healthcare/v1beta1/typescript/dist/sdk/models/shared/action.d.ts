import { SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";
/**
 * Specifies a selection of tags and an `Action` to apply to each one.
**/
export declare class Action extends SpeakeasyBase {
    cleanImageTag?: ImageConfig;
    cleanTextTag?: Map<string, any>;
    deleteTag?: Map<string, any>;
    keepTag?: Map<string, any>;
    queries?: string[];
    recurseTag?: Map<string, any>;
    regenUidTag?: Map<string, any>;
    removeTag?: Map<string, any>;
    resetTag?: Map<string, any>;
}
