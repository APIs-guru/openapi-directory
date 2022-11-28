import { SpeakeasyBase } from "../../../internal/utils";
import { SourceSplitShard } from "./sourcesplitshard";
import { DerivedSource } from "./derivedsource";
/**
 * DEPRECATED in favor of DynamicSourceSplit.
**/
export declare class SourceFork extends SpeakeasyBase {
    primary?: SourceSplitShard;
    primarySource?: DerivedSource;
    residual?: SourceSplitShard;
    residualSource?: DerivedSource;
}
