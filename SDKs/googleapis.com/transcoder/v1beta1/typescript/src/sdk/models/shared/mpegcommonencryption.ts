import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MpegCommonEncryption
/** 
 * Configuration for MPEG Common Encryption (MPEG-CENC).
**/
export class MpegCommonEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;

  @Metadata({ data: "json, name=scheme" })
  scheme?: string;
}
