import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";


export enum DomainResourceStateEnum {
    ResourceStateUnspecified = "RESOURCE_STATE_UNSPECIFIED",
    Importable = "IMPORTABLE",
    Unsupported = "UNSUPPORTED",
    Suspended = "SUSPENDED",
    Expired = "EXPIRED",
    Deleted = "DELETED"
}


// Domain
/** 
 * A domain that the calling user manages in Google Domains.
**/
export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceState" })
  resourceState?: DomainResourceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
