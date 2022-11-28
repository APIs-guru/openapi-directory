import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
**/
export declare class SecretEnvSource extends SpeakeasyBase {
    localObjectReference?: LocalObjectReference;
    name?: string;
    optional?: boolean;
}
