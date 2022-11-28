import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecretManagerSecret
/** 
 * Pairs a secret environment variable with a SecretVersion in Secret Manager.
**/
export class SecretManagerSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: string;

  @SpeakeasyMetadata({ data: "json, name=versionName" })
  versionName?: string;
}
