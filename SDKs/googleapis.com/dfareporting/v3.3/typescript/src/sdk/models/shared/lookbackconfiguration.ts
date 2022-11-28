import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookbackConfiguration
/** 
 * Lookback configuration settings.
**/
export class LookbackConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickDuration" })
  clickDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=postImpressionActivitiesDuration" })
  postImpressionActivitiesDuration?: number;
}
