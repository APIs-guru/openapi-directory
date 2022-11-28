import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2SecretKeySelector
/** 
 * SecretEnvVarSource represents a source for the value of an EnvVar.
**/
export class GoogleCloudRunV2SecretKeySelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
