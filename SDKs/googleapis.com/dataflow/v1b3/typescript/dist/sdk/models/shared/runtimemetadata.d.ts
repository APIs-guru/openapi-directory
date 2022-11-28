import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterMetadata } from "./parametermetadata";
import { SDKInfo } from "./sdkinfo";
/**
 * RuntimeMetadata describing a runtime environment.
**/
export declare class RuntimeMetadata extends SpeakeasyBase {
    parameters?: ParameterMetadata[];
    sdkInfo?: SDKInfo;
}
