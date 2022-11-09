import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Aes128Encryption } from "./aes128encryption";
import { MpegCommonEncryption } from "./mpegcommonencryption";
import { SampleAesEncryption } from "./sampleaesencryption";


// Encryption
/** 
 * Encryption settings.
**/
export class Encryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=aes128" })
  aes128?: Aes128Encryption;

  @Metadata({ data: "json, name=iv" })
  iv?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=mpegCenc" })
  mpegCenc?: MpegCommonEncryption;

  @Metadata({ data: "json, name=sampleAes" })
  sampleAes?: SampleAesEncryption;
}
