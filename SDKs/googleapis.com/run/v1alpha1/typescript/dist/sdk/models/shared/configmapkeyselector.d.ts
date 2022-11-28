import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * Not supported by Cloud Run Selects a key from a ConfigMap.
**/
export declare class ConfigMapKeySelector extends SpeakeasyBase {
    key?: string;
    localObjectReference?: LocalObjectReference;
    name?: string;
    optional?: boolean;
}
