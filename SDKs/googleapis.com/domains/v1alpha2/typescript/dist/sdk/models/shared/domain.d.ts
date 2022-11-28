import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum DomainResourceStateEnum {
    ResourceStateUnspecified = "RESOURCE_STATE_UNSPECIFIED",
    Importable = "IMPORTABLE",
    Unsupported = "UNSUPPORTED",
    Suspended = "SUSPENDED",
    Expired = "EXPIRED",
    Deleted = "DELETED"
}
/**
 * A domain that the calling user manages in Google Domains.
**/
export declare class Domain extends SpeakeasyBase {
    domainName?: string;
    resourceState?: DomainResourceStateEnum;
    yearlyPrice?: Money;
}
