import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourceFileRemote
/** 
 * Specifies a file available via some URI.
**/
export class OsPolicyResourceFileRemote extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha256Checksum" })
  sha256Checksum?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
