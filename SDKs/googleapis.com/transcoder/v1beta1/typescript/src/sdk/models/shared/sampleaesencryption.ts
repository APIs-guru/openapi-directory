import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SampleAesEncryption
/** 
 * Configuration for SAMPLE-AES encryption.
**/
export class SampleAesEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyUri" })
  keyUri?: string;
}
