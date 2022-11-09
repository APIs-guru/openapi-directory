import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrackingFloodlightActivityConfig
/** 
 * Settings that control the behavior of a single Floodlight activity config.
**/
export class TrackingFloodlightActivityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @Metadata({ data: "json, name=postClickLookbackWindowDays" })
  postClickLookbackWindowDays?: number;

  @Metadata({ data: "json, name=postViewLookbackWindowDays" })
  postViewLookbackWindowDays?: number;
}
