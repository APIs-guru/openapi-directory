import { SpeakeasyBase } from "../../../internal/utils";
import { SourceCrowdingConfig } from "./sourcecrowdingconfig";
import { SourceScoringConfig } from "./sourcescoringconfig";
import { Source } from "./source";
/**
 * Configurations for a source while processing a Search or Suggest request.
**/
export declare class SourceConfig extends SpeakeasyBase {
    crowdingConfig?: SourceCrowdingConfig;
    scoringConfig?: SourceScoringConfig;
    source?: Source;
}
