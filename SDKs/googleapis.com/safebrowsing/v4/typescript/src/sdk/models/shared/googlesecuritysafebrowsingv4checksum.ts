import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSecuritySafebrowsingV4Checksum
/** 
 * The expected state of a client's local database.
**/
export class GoogleSecuritySafebrowsingV4Checksum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;
}
