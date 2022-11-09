import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleSecuritySafebrowsingV4RawHashes } from "./googlesecuritysafebrowsingv4rawhashes";
import { GoogleSecuritySafebrowsingV4RawIndices } from "./googlesecuritysafebrowsingv4rawindices";
import { GoogleSecuritySafebrowsingV4RiceDeltaEncoding } from "./googlesecuritysafebrowsingv4ricedeltaencoding";
import { GoogleSecuritySafebrowsingV4RiceDeltaEncoding } from "./googlesecuritysafebrowsingv4ricedeltaencoding";

export enum GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED"
,    Raw = "RAW"
,    Rice = "RICE"
}


// GoogleSecuritySafebrowsingV4ThreatEntrySet
/** 
 * A set of threats that should be added or removed from a client's local database.
**/
export class GoogleSecuritySafebrowsingV4ThreatEntrySet extends SpeakeasyBase {
  @Metadata({ data: "json, name=compressionType" })
  compressionType?: GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum;

  @Metadata({ data: "json, name=rawHashes" })
  rawHashes?: GoogleSecuritySafebrowsingV4RawHashes;

  @Metadata({ data: "json, name=rawIndices" })
  rawIndices?: GoogleSecuritySafebrowsingV4RawIndices;

  @Metadata({ data: "json, name=riceHashes" })
  riceHashes?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;

  @Metadata({ data: "json, name=riceIndices" })
  riceIndices?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
}
