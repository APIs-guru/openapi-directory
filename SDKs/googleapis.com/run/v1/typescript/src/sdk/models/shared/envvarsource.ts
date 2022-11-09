import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigMapKeySelector } from "./configmapkeyselector";
import { SecretKeySelector } from "./secretkeyselector";


// EnvVarSource
/** 
 * EnvVarSource represents a source for the value of an EnvVar.
**/
export class EnvVarSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=configMapKeyRef" })
  configMapKeyRef?: ConfigMapKeySelector;

  @Metadata({ data: "json, name=secretKeyRef" })
  secretKeyRef?: SecretKeySelector;
}
