import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InlineSecret
/** 
 * Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
**/
export class InlineSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=envMap" })
  envMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
