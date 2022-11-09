import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigMapVolumeSource } from "./configmapvolumesource";
import { SecretVolumeSource } from "./secretvolumesource";


// Volume
/** 
 * Volume represents a named volume in a container.
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=configMap" })
  configMap?: ConfigMapVolumeSource;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: SecretVolumeSource;
}
