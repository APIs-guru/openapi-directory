import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputParameter } from "./inputparameter";
import { ResultMetadata } from "./resultmetadata";
/**
 * Action message contains metadata information about a single action present in the external system.
**/
export declare class Action extends SpeakeasyBase {
    inputParameters?: InputParameter[];
    name?: string;
    resultMetadata?: ResultMetadata[];
}
