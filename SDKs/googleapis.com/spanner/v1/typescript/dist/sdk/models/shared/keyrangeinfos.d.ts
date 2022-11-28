import { SpeakeasyBase } from "../../../internal/utils";
import { KeyRangeInfo } from "./keyrangeinfo";
/**
 * A message representing a list of specific information for multiple key ranges.
**/
export declare class KeyRangeInfos extends SpeakeasyBase {
    infos?: KeyRangeInfo[];
    totalSize?: number;
}
