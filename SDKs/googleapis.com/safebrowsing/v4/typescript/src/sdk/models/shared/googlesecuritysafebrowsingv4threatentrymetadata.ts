import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry } from "./googlesecuritysafebrowsingv4threatentrymetadatametadataentry";



// GoogleSecuritySafebrowsingV4ThreatEntryMetadata
/** 
 * The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
**/
export class GoogleSecuritySafebrowsingV4ThreatEntryMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry })
  entries?: GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry[];
}
