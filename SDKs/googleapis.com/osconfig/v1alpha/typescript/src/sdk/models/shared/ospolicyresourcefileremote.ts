import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourceFileRemote
/** 
 * Specifies a file available via some URI.
**/
export class OsPolicyResourceFileRemote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha256Checksum" })
  sha256Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
