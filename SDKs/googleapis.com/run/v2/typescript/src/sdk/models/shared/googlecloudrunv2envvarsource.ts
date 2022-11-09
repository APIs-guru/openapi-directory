import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRunV2SecretKeySelector } from "./googlecloudrunv2secretkeyselector";


// GoogleCloudRunV2EnvVarSource
/** 
 * EnvVarSource represents a source for the value of an EnvVar.
**/
export class GoogleCloudRunV2EnvVarSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=secretKeyRef" })
  secretKeyRef?: GoogleCloudRunV2SecretKeySelector;
}
