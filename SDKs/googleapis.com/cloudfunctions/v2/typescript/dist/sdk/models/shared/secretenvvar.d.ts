import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable.
**/
export declare class SecretEnvVar extends SpeakeasyBase {
    key?: string;
    projectId?: string;
    secret?: string;
    version?: string;
}
