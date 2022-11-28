import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pairs a secret environment variable with a SecretVersion in Secret Manager.
**/
export declare class SecretManagerSecret extends SpeakeasyBase {
    env?: string;
    versionName?: string;
}
