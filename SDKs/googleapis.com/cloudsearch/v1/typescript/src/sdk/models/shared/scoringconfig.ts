import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScoringConfig
/** 
 * Scoring configurations for a source while processing a Search or Suggest request.
**/
export class ScoringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableFreshness" })
  disableFreshness?: boolean;

  @Metadata({ data: "json, name=disablePersonalization" })
  disablePersonalization?: boolean;
}
