import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigMapVolumeSource } from "./configmapvolumesource";
import { SecretVolumeSource } from "./secretvolumesource";



// Volume
/** 
 * Volume represents a named volume in a container.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configMap" })
  configMap?: ConfigMapVolumeSource;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: SecretVolumeSource;
}
