import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
**/
export declare class ConfigMapEnvSource extends SpeakeasyBase {
    localObjectReference?: LocalObjectReference;
    name?: string;
    optional?: boolean;
}
