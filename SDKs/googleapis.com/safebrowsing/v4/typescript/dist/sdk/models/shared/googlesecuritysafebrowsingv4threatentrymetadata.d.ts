import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry } from "./googlesecuritysafebrowsingv4threatentrymetadatametadataentry";
/**
 * The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
**/
export declare class GoogleSecuritySafebrowsingV4ThreatEntryMetadata extends SpeakeasyBase {
    entries?: GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry[];
}
