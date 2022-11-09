import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceCrowdingConfig } from "./sourcecrowdingconfig";
import { SourceScoringConfig } from "./sourcescoringconfig";
import { Source } from "./source";


// SourceConfig
/** 
 * Configurations for a source while processing a Search or Suggest request.
**/
export class SourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=crowdingConfig" })
  crowdingConfig?: SourceCrowdingConfig;

  @Metadata({ data: "json, name=scoringConfig" })
  scoringConfig?: SourceScoringConfig;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
