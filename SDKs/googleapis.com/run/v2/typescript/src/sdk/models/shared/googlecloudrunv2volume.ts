import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRunV2CloudSqlInstance } from "./googlecloudrunv2cloudsqlinstance";
import { GoogleCloudRunV2SecretVolumeSource } from "./googlecloudrunv2secretvolumesource";


// GoogleCloudRunV2Volume
/** 
 * Volume represents a named volume in a container.
**/
export class GoogleCloudRunV2Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudSqlInstance" })
  cloudSqlInstance?: GoogleCloudRunV2CloudSqlInstance;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: GoogleCloudRunV2SecretVolumeSource;
}
