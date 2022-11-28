import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MpegCommonEncryption
/** 
 * Configuration for MPEG Common Encryption (MPEG-CENC).
**/
export class MpegCommonEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme?: string;
}
