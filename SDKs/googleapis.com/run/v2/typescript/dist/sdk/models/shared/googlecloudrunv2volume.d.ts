import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2CloudSqlInstance } from "./googlecloudrunv2cloudsqlinstance";
import { GoogleCloudRunV2SecretVolumeSource } from "./googlecloudrunv2secretvolumesource";
/**
 * Volume represents a named volume in a container.
**/
export declare class GoogleCloudRunV2Volume extends SpeakeasyBase {
    cloudSqlInstance?: GoogleCloudRunV2CloudSqlInstance;
    name?: string;
    secret?: GoogleCloudRunV2SecretVolumeSource;
}
