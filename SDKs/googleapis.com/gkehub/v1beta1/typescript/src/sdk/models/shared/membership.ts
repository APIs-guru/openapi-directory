import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Authority } from "./authority";
import { MembershipEndpoint } from "./membershipendpoint";
import { MembershipState } from "./membershipstate";

export enum MembershipInfrastructureTypeEnum {
    InfrastructureTypeUnspecified = "INFRASTRUCTURE_TYPE_UNSPECIFIED"
,    OnPrem = "ON_PREM"
,    MultiCloud = "MULTI_CLOUD"
}


// Membership
/** 
 * Membership contains information about a member cluster.
**/
export class Membership extends SpeakeasyBase {
  @Metadata({ data: "json, name=authority" })
  authority?: Authority;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: MembershipEndpoint;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=infrastructureType" })
  infrastructureType?: MembershipInfrastructureTypeEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastConnectionTime" })
  lastConnectionTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: MembershipState;

  @Metadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
