import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildConfig } from "./buildconfig";
import { EventTrigger } from "./eventtrigger";
import { ServiceConfig } from "./serviceconfig";
import { GoogleCloudFunctionsV2betaStateMessage } from "./googlecloudfunctionsv2betastatemessage";
import { BuildConfigInput } from "./buildconfig";
import { EventTriggerInput } from "./eventtrigger";
import { ServiceConfigInput } from "./serviceconfig";


export enum FunctionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deploying = "DEPLOYING",
    Deleting = "DELETING",
    Unknown = "UNKNOWN"
}

export enum FunctionEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    Gen1 = "GEN_1",
    Gen2 = "GEN_2"
}


// Function
/** 
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
export class Function extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildConfig" })
  buildConfig?: BuildConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: FunctionEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=eventTrigger" })
  eventTrigger?: EventTrigger;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceConfig" })
  serviceConfig?: ServiceConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FunctionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessages", elemType: GoogleCloudFunctionsV2betaStateMessage })
  stateMessages?: GoogleCloudFunctionsV2betaStateMessage[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// FunctionInput
/** 
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
export class FunctionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildConfig" })
  buildConfig?: BuildConfigInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: FunctionEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=eventTrigger" })
  eventTrigger?: EventTriggerInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceConfig" })
  serviceConfig?: ServiceConfigInput;
}
