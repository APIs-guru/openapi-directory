import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RuntimeEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    Gen1 = "GEN_1",
    Gen2 = "GEN_2"
}

export enum RuntimeStageEnum {
    RuntimeStageUnspecified = "RUNTIME_STAGE_UNSPECIFIED",
    Development = "DEVELOPMENT",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED",
    Decommissioned = "DECOMMISSIONED"
}


// Runtime
/** 
 * Describes a runtime and any special information (e.g., deprecation status) related to it.
**/
export class Runtime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: RuntimeEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: RuntimeStageEnum;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string[];
}
