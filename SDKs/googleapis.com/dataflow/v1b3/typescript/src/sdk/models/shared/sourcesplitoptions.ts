import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceSplitOptions
/** 
 * Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.
**/
export class SourceSplitOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredBundleSizeBytes" })
  desiredBundleSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=desiredShardSizeBytes" })
  desiredShardSizeBytes?: string;
}
