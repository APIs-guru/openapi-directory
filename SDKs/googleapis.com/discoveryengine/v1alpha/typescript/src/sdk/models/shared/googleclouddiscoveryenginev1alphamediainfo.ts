import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1alphaMediaInfo
/** 
 * Media-specific user event information.
**/
export class GoogleCloudDiscoveryengineV1alphaMediaInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mediaProgressDuration" })
  mediaProgressDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaProgressPercentage" })
  mediaProgressPercentage?: number;
}
