import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";

export enum DomainResourceStateEnum {
    ResourceStateUnspecified = "RESOURCE_STATE_UNSPECIFIED"
,    Importable = "IMPORTABLE"
,    Unsupported = "UNSUPPORTED"
,    Suspended = "SUSPENDED"
,    Expired = "EXPIRED"
,    Deleted = "DELETED"
}


// Domain
/** 
 * A domain that the calling user manages in Google Domains.
**/
export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=resourceState" })
  resourceState?: DomainResourceStateEnum;

  @Metadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
