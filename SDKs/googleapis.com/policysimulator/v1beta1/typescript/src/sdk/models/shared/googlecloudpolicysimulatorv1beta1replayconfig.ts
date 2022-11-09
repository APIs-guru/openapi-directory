import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIamV1Policy } from "./googleiamv1policy";

export enum GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum {
    LogSourceUnspecified = "LOG_SOURCE_UNSPECIFIED"
,    RecentAccesses = "RECENT_ACCESSES"
}


// GoogleCloudPolicysimulatorV1beta1ReplayConfig
/** 
 * The configuration used for a Replay.
**/
export class GoogleCloudPolicysimulatorV1beta1ReplayConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=logSource" })
  logSource?: GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum;

  @Metadata({ data: "json, name=policyOverlay", elemType: shared.GoogleIamV1Policy })
  policyOverlay?: Map<string, GoogleIamV1Policy>;
}
