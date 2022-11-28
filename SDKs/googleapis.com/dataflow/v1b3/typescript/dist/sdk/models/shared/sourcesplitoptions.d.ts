import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.
**/
export declare class SourceSplitOptions extends SpeakeasyBase {
    desiredBundleSizeBytes?: string;
    desiredShardSizeBytes?: string;
}
