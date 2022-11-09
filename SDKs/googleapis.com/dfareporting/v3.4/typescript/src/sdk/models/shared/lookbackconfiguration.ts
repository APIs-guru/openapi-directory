import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookbackConfiguration
/** 
 * Lookback configuration settings.
**/
export class LookbackConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickDuration" })
  clickDuration?: number;

  @Metadata({ data: "json, name=postImpressionActivitiesDuration" })
  postImpressionActivitiesDuration?: number;
}
