import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSecuritySafebrowsingV4Checksum
/** 
 * The expected state of a client's local database.
**/
export class GoogleSecuritySafebrowsingV4Checksum extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha256" })
  sha256?: string;
}
