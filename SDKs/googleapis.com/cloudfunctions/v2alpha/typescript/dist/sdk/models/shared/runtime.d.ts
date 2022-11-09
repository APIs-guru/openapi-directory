import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RuntimeEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    Gen1 = "GEN_1",
    Gen2 = "GEN_2"
}
export declare enum RuntimeStageEnum {
    RuntimeStageUnspecified = "RUNTIME_STAGE_UNSPECIFIED",
    Development = "DEVELOPMENT",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED",
    Decommissioned = "DECOMMISSIONED"
}
/**
 * Describes a runtime and any special information (e.g., deprecation status) related to it.
**/
export declare class Runtime extends SpeakeasyBase {
    displayName?: string;
    environment?: RuntimeEnvironmentEnum;
    name?: string;
    stage?: RuntimeStageEnum;
    warnings?: string[];
}
