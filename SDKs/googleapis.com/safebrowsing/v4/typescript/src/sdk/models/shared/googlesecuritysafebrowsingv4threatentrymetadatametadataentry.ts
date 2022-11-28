import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry
/** 
 * A single metadata entry.
**/
export class GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
