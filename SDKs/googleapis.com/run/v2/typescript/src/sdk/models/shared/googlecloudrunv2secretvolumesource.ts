import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2VersionToPath } from "./googlecloudrunv2versiontopath";


// GoogleCloudRunV2SecretVolumeSource
/** 
 * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
**/
export class GoogleCloudRunV2SecretVolumeSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultMode" })
  defaultMode?: number;

  @Metadata({ data: "json, name=items", elemType: shared.GoogleCloudRunV2VersionToPath })
  items?: GoogleCloudRunV2VersionToPath[];

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
