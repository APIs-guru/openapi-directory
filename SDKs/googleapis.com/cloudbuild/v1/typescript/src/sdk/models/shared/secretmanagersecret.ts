import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecretManagerSecret
/** 
 * Pairs a secret environment variable with a SecretVersion in Secret Manager.
**/
export class SecretManagerSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=env" })
  env?: string;

  @Metadata({ data: "json, name=versionName" })
  versionName?: string;
}
