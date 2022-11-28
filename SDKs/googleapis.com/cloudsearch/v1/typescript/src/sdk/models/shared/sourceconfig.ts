import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceCrowdingConfig } from "./sourcecrowdingconfig";
import { SourceScoringConfig } from "./sourcescoringconfig";
import { Source } from "./source";



// SourceConfig
/** 
 * Configurations for a source while processing a Search or Suggest request.
**/
export class SourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crowdingConfig" })
  crowdingConfig?: SourceCrowdingConfig;

  @SpeakeasyMetadata({ data: "json, name=scoringConfig" })
  scoringConfig?: SourceScoringConfig;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
