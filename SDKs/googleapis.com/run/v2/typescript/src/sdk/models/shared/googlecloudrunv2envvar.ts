import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2EnvVarSource } from "./googlecloudrunv2envvarsource";



// GoogleCloudRunV2EnvVar
/** 
 * EnvVar represents an environment variable present in a Container.
**/
export class GoogleCloudRunV2EnvVar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=valueSource" })
  valueSource?: GoogleCloudRunV2EnvVarSource;
}
