import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2VersionToPath } from "./googlecloudrunv2versiontopath";



// GoogleCloudRunV2SecretVolumeSource
/** 
 * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
**/
export class GoogleCloudRunV2SecretVolumeSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultMode" })
  defaultMode?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GoogleCloudRunV2VersionToPath })
  items?: GoogleCloudRunV2VersionToPath[];

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
