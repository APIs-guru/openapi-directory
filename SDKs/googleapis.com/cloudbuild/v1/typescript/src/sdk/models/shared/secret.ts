import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Secret
/** 
 * Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.
**/
export class Secret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=secretEnv" })
  secretEnv?: Map<string, string>;
}
