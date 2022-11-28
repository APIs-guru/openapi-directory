import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
**/
export declare class LinkedInterconnectAttachments extends SpeakeasyBase {
    siteToSiteDataTransfer?: boolean;
    uris?: string[];
    vpcNetwork?: string;
}
/**
 * A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
**/
export declare class LinkedInterconnectAttachmentsInput extends SpeakeasyBase {
    siteToSiteDataTransfer?: boolean;
    uris?: string[];
}
