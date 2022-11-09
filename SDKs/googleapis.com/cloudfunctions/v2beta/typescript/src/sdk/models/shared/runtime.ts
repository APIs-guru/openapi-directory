import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RuntimeEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED"
,    Gen1 = "GEN_1"
,    Gen2 = "GEN_2"
}

export enum RuntimeStageEnum {
    RuntimeStageUnspecified = "RUNTIME_STAGE_UNSPECIFIED"
,    Development = "DEVELOPMENT"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
,    Decommissioned = "DECOMMISSIONED"
}


// Runtime
/** 
 * Describes a runtime and any special information (e.g., deprecation status) related to it.
**/
export class Runtime extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: RuntimeEnvironmentEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stage" })
  stage?: RuntimeStageEnum;

  @Metadata({ data: "json, name=warnings" })
  warnings?: string[];
}
