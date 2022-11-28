import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SampleAesEncryption
/** 
 * Configuration for SAMPLE-AES encryption.
**/
export class SampleAesEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyUri" })
  keyUri?: string;
}
