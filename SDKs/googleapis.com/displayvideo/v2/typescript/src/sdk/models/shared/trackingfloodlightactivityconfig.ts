import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackingFloodlightActivityConfig
/** 
 * Settings that control the behavior of a single Floodlight activity config.
**/
export class TrackingFloodlightActivityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @SpeakeasyMetadata({ data: "json, name=postClickLookbackWindowDays" })
  postClickLookbackWindowDays?: number;

  @SpeakeasyMetadata({ data: "json, name=postViewLookbackWindowDays" })
  postViewLookbackWindowDays?: number;
}
