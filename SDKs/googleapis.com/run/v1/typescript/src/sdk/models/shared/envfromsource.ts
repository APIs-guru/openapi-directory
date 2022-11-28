import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigMapEnvSource } from "./configmapenvsource";
import { SecretEnvSource } from "./secretenvsource";



// EnvFromSource
/** 
 * Not supported by Cloud Run. EnvFromSource represents the source of a set of ConfigMaps
**/
export class EnvFromSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configMapRef" })
  configMapRef?: ConfigMapEnvSource;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=secretRef" })
  secretRef?: SecretEnvSource;
}
