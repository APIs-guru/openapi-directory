import { SpeakeasyBase } from "../../../internal/utils";
import { InputParameter } from "./inputparameter";
import { ResultMetadata } from "./resultmetadata";
/**
 * Schema of a runtime action.
**/
export declare class RuntimeActionSchema extends SpeakeasyBase {
    action?: string;
    inputParameters?: InputParameter[];
    resultMetadata?: ResultMetadata[];
}
