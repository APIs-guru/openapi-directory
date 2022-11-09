import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceSplitOptions
/** 
 * Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.
**/
export class SourceSplitOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredBundleSizeBytes" })
  desiredBundleSizeBytes?: string;

  @Metadata({ data: "json, name=desiredShardSizeBytes" })
  desiredShardSizeBytes?: string;
}
