import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InlineSecret
/** 
 * Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
**/
export class InlineSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=envMap" })
  envMap?: Map<string, string>;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
