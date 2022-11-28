import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4RawHashes } from "./googlesecuritysafebrowsingv4rawhashes";
import { GoogleSecuritySafebrowsingV4RawIndices } from "./googlesecuritysafebrowsingv4rawindices";
import { GoogleSecuritySafebrowsingV4RiceDeltaEncoding } from "./googlesecuritysafebrowsingv4ricedeltaencoding";


export enum GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED",
    Raw = "RAW",
    Rice = "RICE"
}


// GoogleSecuritySafebrowsingV4ThreatEntrySet
/** 
 * A set of threats that should be added or removed from a client's local database.
**/
export class GoogleSecuritySafebrowsingV4ThreatEntrySet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compressionType" })
  compressionType?: GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=rawHashes" })
  rawHashes?: GoogleSecuritySafebrowsingV4RawHashes;

  @SpeakeasyMetadata({ data: "json, name=rawIndices" })
  rawIndices?: GoogleSecuritySafebrowsingV4RawIndices;

  @SpeakeasyMetadata({ data: "json, name=riceHashes" })
  riceHashes?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;

  @SpeakeasyMetadata({ data: "json, name=riceIndices" })
  riceIndices?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
}
