import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkedInterconnectAttachments
/** 
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
**/
export class LinkedInterconnectAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: string;
}


// LinkedInterconnectAttachmentsInput
/** 
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
**/
export class LinkedInterconnectAttachmentsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}
