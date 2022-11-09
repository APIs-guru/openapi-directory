import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecretEnvVar
/** 
 * Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable.
**/
export class SecretEnvVar extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
