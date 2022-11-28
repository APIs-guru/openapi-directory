import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4RawHashes } from "./googlesecuritysafebrowsingv4rawhashes";
import { GoogleSecuritySafebrowsingV4RawIndices } from "./googlesecuritysafebrowsingv4rawindices";
import { GoogleSecuritySafebrowsingV4RiceDeltaEncoding } from "./googlesecuritysafebrowsingv4ricedeltaencoding";
export declare enum GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED",
    Raw = "RAW",
    Rice = "RICE"
}
/**
 * A set of threats that should be added or removed from a client's local database.
**/
export declare class GoogleSecuritySafebrowsingV4ThreatEntrySet extends SpeakeasyBase {
    compressionType?: GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum;
    rawHashes?: GoogleSecuritySafebrowsingV4RawHashes;
    rawIndices?: GoogleSecuritySafebrowsingV4RawIndices;
    riceHashes?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
    riceIndices?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
}
