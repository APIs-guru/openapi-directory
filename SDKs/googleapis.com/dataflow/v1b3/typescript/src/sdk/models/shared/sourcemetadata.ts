import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceMetadata
/** 
 * Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.
**/
export class SourceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedSizeBytes" })
  estimatedSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=infinite" })
  infinite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producesSortedKeys" })
  producesSortedKeys?: boolean;
}
