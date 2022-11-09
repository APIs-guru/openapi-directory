import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2SecretKeySelector
/** 
 * SecretEnvVarSource represents a source for the value of an EnvVar.
**/
export class GoogleCloudRunV2SecretKeySelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
