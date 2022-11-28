import { SpeakeasyBase } from "../../../internal/utils";
import { DsRecord } from "./dsrecord";
export declare enum GoogleDomainsDnsDsStateEnum {
    DsStateUnspecified = "DS_STATE_UNSPECIFIED",
    DsRecordsUnpublished = "DS_RECORDS_UNPUBLISHED",
    DsRecordsPublished = "DS_RECORDS_PUBLISHED"
}
/**
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
**/
export declare class GoogleDomainsDns extends SpeakeasyBase {
    dsRecords?: DsRecord[];
    dsState?: GoogleDomainsDnsDsStateEnum;
    nameServers?: string[];
}
/**
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
**/
export declare class GoogleDomainsDnsInput extends SpeakeasyBase {
    dsState?: GoogleDomainsDnsDsStateEnum;
}
