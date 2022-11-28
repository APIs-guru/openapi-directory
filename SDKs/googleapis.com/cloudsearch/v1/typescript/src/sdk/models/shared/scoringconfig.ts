import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoringConfig
/** 
 * Scoring configurations for a source while processing a Search or Suggest request.
**/
export class ScoringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableFreshness" })
  disableFreshness?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disablePersonalization" })
  disablePersonalization?: boolean;
}
