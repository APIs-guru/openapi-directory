import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkedInterconnectAttachments
/** 
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
**/
export class LinkedInterconnectAttachments extends SpeakeasyBase {
  @Metadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}
