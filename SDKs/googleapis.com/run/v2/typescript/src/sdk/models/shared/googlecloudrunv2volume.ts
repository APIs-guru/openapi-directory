import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2CloudSqlInstance } from "./googlecloudrunv2cloudsqlinstance";
import { GoogleCloudRunV2SecretVolumeSource } from "./googlecloudrunv2secretvolumesource";



// GoogleCloudRunV2Volume
/** 
 * Volume represents a named volume in a container.
**/
export class GoogleCloudRunV2Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSqlInstance" })
  cloudSqlInstance?: GoogleCloudRunV2CloudSqlInstance;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: GoogleCloudRunV2SecretVolumeSource;
}
