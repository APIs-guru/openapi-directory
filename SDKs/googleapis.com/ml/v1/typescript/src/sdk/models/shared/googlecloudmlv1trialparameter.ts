import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1TrialParameter
/** 
 * A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.
**/
export class GoogleCloudMlV1TrialParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=floatValue" })
  floatValue?: number;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
