import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry
/** 
 * A single metadata entry.
**/
export class GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
