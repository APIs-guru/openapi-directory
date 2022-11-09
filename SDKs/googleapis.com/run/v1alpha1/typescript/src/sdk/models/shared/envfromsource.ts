import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigMapEnvSource } from "./configmapenvsource";
import { SecretEnvSource } from "./secretenvsource";


// EnvFromSource
/** 
 * Not supported by Cloud Run EnvFromSource represents the source of a set of ConfigMaps
**/
export class EnvFromSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=configMapRef" })
  configMapRef?: ConfigMapEnvSource;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=secretRef" })
  secretRef?: SecretEnvSource;
}
