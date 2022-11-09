import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TrustStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Connected = "CONNECTED"
,    Disconnected = "DISCONNECTED"
}

export enum TrustTrustDirectionEnum {
    TrustDirectionUnspecified = "TRUST_DIRECTION_UNSPECIFIED"
,    Inbound = "INBOUND"
,    Outbound = "OUTBOUND"
,    Bidirectional = "BIDIRECTIONAL"
}

export enum TrustTrustTypeEnum {
    TrustTypeUnspecified = "TRUST_TYPE_UNSPECIFIED"
,    Forest = "FOREST"
,    External = "EXTERNAL"
}


// Trust
/** 
 * Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export class Trust extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=lastKnownTrustConnectedHeartbeatTime" })
  lastKnownTrustConnectedHeartbeatTime?: string;

  @Metadata({ data: "json, name=selectiveAuthentication" })
  selectiveAuthentication?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: TrustStateEnum;

  @Metadata({ data: "json, name=stateDescription" })
  stateDescription?: string;

  @Metadata({ data: "json, name=targetDnsIpAddresses" })
  targetDnsIpAddresses?: string[];

  @Metadata({ data: "json, name=targetDomainName" })
  targetDomainName?: string;

  @Metadata({ data: "json, name=trustDirection" })
  trustDirection?: TrustTrustDirectionEnum;

  @Metadata({ data: "json, name=trustHandshakeSecret" })
  trustHandshakeSecret?: string;

  @Metadata({ data: "json, name=trustType" })
  trustType?: TrustTrustTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
