import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildConfig } from "./buildconfig";
import { EventTrigger } from "./eventtrigger";
import { ServiceConfig } from "./serviceconfig";
import { GoogleCloudFunctionsV2betaStateMessage } from "./googlecloudfunctionsv2betastatemessage";

export enum FunctionEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED"
,    Gen1 = "GEN_1"
,    Gen2 = "GEN_2"
}

export enum FunctionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Failed = "FAILED"
,    Deploying = "DEPLOYING"
,    Deleting = "DELETING"
,    Unknown = "UNKNOWN"
}


// Function
/** 
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
export class Function extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildConfig" })
  buildConfig?: BuildConfig;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: FunctionEnvironmentEnum;

  @Metadata({ data: "json, name=eventTrigger" })
  eventTrigger?: EventTrigger;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceConfig" })
  serviceConfig?: ServiceConfig;

  @Metadata({ data: "json, name=state" })
  state?: FunctionStateEnum;

  @Metadata({ data: "json, name=stateMessages", elemType: shared.GoogleCloudFunctionsV2betaStateMessage })
  stateMessages?: GoogleCloudFunctionsV2betaStateMessage[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
