import { SpeakeasyBase } from "../../../internal/utils";
import { EnvVariable } from "./envvariable";
/**
 * An action that gets executed during initialization of the replicas.
**/
export declare class Action extends SpeakeasyBase {
    commands?: string[];
    envVariables?: EnvVariable[];
    timeoutMilliSeconds?: number;
}
