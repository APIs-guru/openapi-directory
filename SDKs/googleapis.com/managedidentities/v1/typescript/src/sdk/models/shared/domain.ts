import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trust } from "./trust";

export enum DomainStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Repairing = "REPAIRING"
,    PerformingMaintenance = "PERFORMING_MAINTENANCE"
,    Unavailable = "UNAVAILABLE"
}


// Domain
/** 
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: string;

  @Metadata({ data: "json, name=auditLogsEnabled" })
  auditLogsEnabled?: boolean;

  @Metadata({ data: "json, name=authorizedNetworks" })
  authorizedNetworks?: string[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=fqdn" })
  fqdn?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=locations" })
  locations?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;

  @Metadata({ data: "json, name=state" })
  state?: DomainStateEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=trusts", elemType: shared.Trust })
  trusts?: Trust[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
