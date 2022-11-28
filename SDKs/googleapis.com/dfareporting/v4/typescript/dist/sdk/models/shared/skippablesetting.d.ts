import { SpeakeasyBase } from "../../../internal/utils";
import { VideoOffset } from "./videooffset";
/**
 * Skippable Settings
**/
export declare class SkippableSetting extends SpeakeasyBase {
    kind?: string;
    progressOffset?: VideoOffset;
    skipOffset?: VideoOffset;
    skippable?: boolean;
}
