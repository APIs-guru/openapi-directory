import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * Not supported by Cloud Run.
**/
export declare class ConfigMapKeySelector extends SpeakeasyBase {
    key?: string;
    localObjectReference?: LocalObjectReference;
    name?: string;
    optional?: boolean;
}
