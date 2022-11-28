import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED",
    Raw = "RAW",
    Rice = "RICE"
}


// GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints
/** 
 * The constraints for this update.
**/
export class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceLocation" })
  deviceLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDatabaseEntries" })
  maxDatabaseEntries?: number;

  @SpeakeasyMetadata({ data: "json, name=maxUpdateEntries" })
  maxUpdateEntries?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedCompressions" })
  supportedCompressions?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum[];
}
