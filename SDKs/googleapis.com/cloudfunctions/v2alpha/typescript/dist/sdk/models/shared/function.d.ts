import { SpeakeasyBase } from "../../../internal/utils";
import { BuildConfigInput } from "./buildconfig";
import { EventTriggerInput } from "./eventtrigger";
import { ServiceConfigInput } from "./serviceconfig";
import { BuildConfig } from "./buildconfig";
import { EventTrigger } from "./eventtrigger";
import { ServiceConfig } from "./serviceconfig";
import { GoogleCloudFunctionsV2alphaStateMessage } from "./googlecloudfunctionsv2alphastatemessage";
export declare enum FunctionEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    Gen1 = "GEN_1",
    Gen2 = "GEN_2"
}
export declare enum FunctionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deploying = "DEPLOYING",
    Deleting = "DELETING",
    Unknown = "UNKNOWN"
}
/**
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
export declare class FunctionInput extends SpeakeasyBase {
    buildConfig?: BuildConfigInput;
    description?: string;
    environment?: FunctionEnvironmentEnum;
    eventTrigger?: EventTriggerInput;
    labels?: Map<string, string>;
    name?: string;
    serviceConfig?: ServiceConfigInput;
}
/**
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
export declare class Function extends SpeakeasyBase {
    buildConfig?: BuildConfig;
    description?: string;
    environment?: FunctionEnvironmentEnum;
    eventTrigger?: EventTrigger;
    labels?: Map<string, string>;
    name?: string;
    serviceConfig?: ServiceConfig;
    state?: FunctionStateEnum;
    stateMessages?: GoogleCloudFunctionsV2alphaStateMessage[];
    updateTime?: string;
}
