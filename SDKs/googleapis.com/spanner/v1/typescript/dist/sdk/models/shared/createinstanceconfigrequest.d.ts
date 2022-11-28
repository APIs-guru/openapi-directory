import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfigInput } from "./instanceconfig";
/**
 * The request for CreateInstanceConfigRequest.
**/
export declare class CreateInstanceConfigRequestInput extends SpeakeasyBase {
    instanceConfig?: InstanceConfigInput;
    instanceConfigId?: string;
    validateOnly?: boolean;
}
