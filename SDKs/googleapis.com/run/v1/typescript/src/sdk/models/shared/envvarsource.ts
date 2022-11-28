import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigMapKeySelector } from "./configmapkeyselector";
import { SecretKeySelector } from "./secretkeyselector";



// EnvVarSource
/** 
 * EnvVarSource represents a source for the value of an EnvVar.
**/
export class EnvVarSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configMapKeyRef" })
  configMapKeyRef?: ConfigMapKeySelector;

  @SpeakeasyMetadata({ data: "json, name=secretKeyRef" })
  secretKeyRef?: SecretKeySelector;
}
