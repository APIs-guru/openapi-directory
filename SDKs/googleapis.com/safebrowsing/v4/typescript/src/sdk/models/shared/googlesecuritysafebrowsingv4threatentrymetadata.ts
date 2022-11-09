import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry } from "./googlesecuritysafebrowsingv4threatentrymetadatametadataentry";


// GoogleSecuritySafebrowsingV4ThreatEntryMetadata
/** 
 * The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
**/
export class GoogleSecuritySafebrowsingV4ThreatEntryMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry })
  entries?: GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry[];
}
