import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DsRecord } from "./dsrecord";

export enum GoogleDomainsDnsDsStateEnum {
    DsStateUnspecified = "DS_STATE_UNSPECIFIED"
,    DsRecordsUnpublished = "DS_RECORDS_UNPUBLISHED"
,    DsRecordsPublished = "DS_RECORDS_PUBLISHED"
}


// GoogleDomainsDns
/** 
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
**/
export class GoogleDomainsDns extends SpeakeasyBase {
  @Metadata({ data: "json, name=dsRecords", elemType: shared.DsRecord })
  dsRecords?: DsRecord[];

  @Metadata({ data: "json, name=dsState" })
  dsState?: GoogleDomainsDnsDsStateEnum;

  @Metadata({ data: "json, name=nameServers" })
  nameServers?: string[];
}
