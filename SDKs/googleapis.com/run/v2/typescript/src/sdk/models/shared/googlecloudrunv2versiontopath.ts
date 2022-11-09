import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2VersionToPath
/** 
 * VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path.
**/
export class GoogleCloudRunV2VersionToPath extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
