import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2VersionToPath
/** 
 * VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path.
**/
export class GoogleCloudRunV2VersionToPath extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
