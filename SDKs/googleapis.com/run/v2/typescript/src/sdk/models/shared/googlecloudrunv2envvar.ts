import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRunV2EnvVarSource } from "./googlecloudrunv2envvarsource";


// GoogleCloudRunV2EnvVar
/** 
 * EnvVar represents an environment variable present in a Container.
**/
export class GoogleCloudRunV2EnvVar extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=valueSource" })
  valueSource?: GoogleCloudRunV2EnvVarSource;
}
