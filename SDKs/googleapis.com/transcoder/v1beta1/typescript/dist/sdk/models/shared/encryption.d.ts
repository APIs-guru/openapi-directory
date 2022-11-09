import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Aes128Encryption } from "./aes128encryption";
import { MpegCommonEncryption } from "./mpegcommonencryption";
import { SampleAesEncryption } from "./sampleaesencryption";
/**
 * Encryption settings.
**/
export declare class Encryption extends SpeakeasyBase {
    aes128?: Aes128Encryption;
    iv?: string;
    key?: string;
    mpegCenc?: MpegCommonEncryption;
    sampleAes?: SampleAesEncryption;
}
