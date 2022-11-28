import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED",
    Raw = "RAW",
    Rice = "RICE"
}
/**
 * The constraints for this update.
**/
export declare class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints extends SpeakeasyBase {
    deviceLocation?: string;
    language?: string;
    maxDatabaseEntries?: number;
    maxUpdateEntries?: number;
    region?: string;
    supportedCompressions?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum[];
}
