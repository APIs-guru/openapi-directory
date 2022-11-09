import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1TrialSettings
/** 
 * Settings for trial offers.
**/
export class GoogleCloudChannelV1TrialSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=trial" })
  trial?: boolean;
}
