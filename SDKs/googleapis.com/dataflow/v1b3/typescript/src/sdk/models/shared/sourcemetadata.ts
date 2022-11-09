import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceMetadata
/** 
 * Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.
**/
export class SourceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimatedSizeBytes" })
  estimatedSizeBytes?: string;

  @Metadata({ data: "json, name=infinite" })
  infinite?: boolean;

  @Metadata({ data: "json, name=producesSortedKeys" })
  producesSortedKeys?: boolean;
}
