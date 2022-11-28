import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1TrialParameter
/** 
 * A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.
**/
export class GoogleCloudMlV1TrialParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floatValue" })
  floatValue?: number;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
