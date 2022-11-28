import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aes128Encryption } from "./aes128encryption";
import { MpegCommonEncryption } from "./mpegcommonencryption";
import { SampleAesEncryption } from "./sampleaesencryption";



// Encryption
/** 
 * Encryption settings.
**/
export class Encryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aes128" })
  aes128?: Aes128Encryption;

  @SpeakeasyMetadata({ data: "json, name=iv" })
  iv?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=mpegCenc" })
  mpegCenc?: MpegCommonEncryption;

  @SpeakeasyMetadata({ data: "json, name=sampleAes" })
  sampleAes?: SampleAesEncryption;
}
