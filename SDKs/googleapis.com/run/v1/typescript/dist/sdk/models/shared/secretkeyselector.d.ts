import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * SecretKeySelector selects a key of a Secret.
**/
export declare class SecretKeySelector extends SpeakeasyBase {
    key?: string;
    localObjectReference?: LocalObjectReference;
    name?: string;
    optional?: boolean;
}
