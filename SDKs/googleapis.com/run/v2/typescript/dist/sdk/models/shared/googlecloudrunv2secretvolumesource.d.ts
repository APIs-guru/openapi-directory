import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2VersionToPath } from "./googlecloudrunv2versiontopath";
/**
 * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
**/
export declare class GoogleCloudRunV2SecretVolumeSource extends SpeakeasyBase {
    defaultMode?: number;
    items?: GoogleCloudRunV2VersionToPath[];
    secret?: string;
}
