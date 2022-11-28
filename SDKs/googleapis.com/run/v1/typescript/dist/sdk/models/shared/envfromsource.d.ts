import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigMapEnvSource } from "./configmapenvsource";
import { SecretEnvSource } from "./secretenvsource";
/**
 * Not supported by Cloud Run. EnvFromSource represents the source of a set of ConfigMaps
**/
export declare class EnvFromSource extends SpeakeasyBase {
    configMapRef?: ConfigMapEnvSource;
    prefix?: string;
    secretRef?: SecretEnvSource;
}
