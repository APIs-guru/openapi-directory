import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trust } from "./trust";


export enum DomainStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Repairing = "REPAIRING",
    PerformingMaintenance = "PERFORMING_MAINTENANCE",
    Unavailable = "UNAVAILABLE"
}


// Domain
/** 
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: string;

  @SpeakeasyMetadata({ data: "json, name=auditLogsEnabled" })
  auditLogsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authorizedNetworks" })
  authorizedNetworks?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DomainStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=trusts", elemType: Trust })
  trusts?: Trust[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// DomainInput
/** 
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export class DomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: string;

  @SpeakeasyMetadata({ data: "json, name=auditLogsEnabled" })
  auditLogsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authorizedNetworks" })
  authorizedNetworks?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;
}
