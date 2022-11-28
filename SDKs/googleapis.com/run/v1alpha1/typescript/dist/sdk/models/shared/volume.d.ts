import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigMapVolumeSource } from "./configmapvolumesource";
import { SecretVolumeSource } from "./secretvolumesource";
/**
 * Volume represents a named volume in a container.
**/
export declare class Volume extends SpeakeasyBase {
    configMap?: ConfigMapVolumeSource;
    name?: string;
    secret?: SecretVolumeSource;
}
