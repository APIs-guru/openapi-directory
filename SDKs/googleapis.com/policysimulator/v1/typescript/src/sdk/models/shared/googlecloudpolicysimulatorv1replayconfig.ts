import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1Policy } from "./googleiamv1policy";


export enum GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum {
    LogSourceUnspecified = "LOG_SOURCE_UNSPECIFIED",
    RecentAccesses = "RECENT_ACCESSES"
}


// GoogleCloudPolicysimulatorV1ReplayConfig
/** 
 * The configuration used for a Replay.
**/
export class GoogleCloudPolicysimulatorV1ReplayConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logSource" })
  logSource?: GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=policyOverlay", elemType: GoogleIamV1Policy })
  policyOverlay?: Map<string, GoogleIamV1Policy>;
}
