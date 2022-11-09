import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED"
,    Raw = "RAW"
,    Rice = "RICE"
}


// GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints
/** 
 * The constraints for this update.
**/
export class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceLocation" })
  deviceLocation?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=maxDatabaseEntries" })
  maxDatabaseEntries?: number;

  @Metadata({ data: "json, name=maxUpdateEntries" })
  maxUpdateEntries?: number;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=supportedCompressions" })
  supportedCompressions?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum[];
}
