import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.
**/
export declare class GoogleCloudMlV1TrialParameter extends SpeakeasyBase {
    floatValue?: number;
    intValue?: string;
    parameter?: string;
    stringValue?: string;
}
