import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TrustTrustDirectionEnum {
    TrustDirectionUnspecified = "TRUST_DIRECTION_UNSPECIFIED",
    Inbound = "INBOUND",
    Outbound = "OUTBOUND",
    Bidirectional = "BIDIRECTIONAL"
}

export enum TrustTrustTypeEnum {
    TrustTypeUnspecified = "TRUST_TYPE_UNSPECIFIED",
    Forest = "FOREST",
    External = "EXTERNAL"
}

export enum TrustStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED"
}


// TrustInput
/** 
 * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
**/
export class TrustInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectiveAuthentication" })
  selectiveAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetDnsIpAddresses" })
  targetDnsIpAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetDomainName" })
  targetDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=trustDirection" })
  trustDirection?: TrustTrustDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=trustHandshakeSecret" })
  trustHandshakeSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=trustType" })
  trustType?: TrustTrustTypeEnum;
}


// Trust
/** 
 * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
**/
export class Trust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastTrustHeartbeatTime" })
  lastTrustHeartbeatTime?: string;

  @SpeakeasyMetadata({ data: "json, name=selectiveAuthentication" })
  selectiveAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TrustStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateDescription" })
  stateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=targetDnsIpAddresses" })
  targetDnsIpAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetDomainName" })
  targetDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=trustDirection" })
  trustDirection?: TrustTrustDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=trustHandshakeSecret" })
  trustHandshakeSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=trustType" })
  trustType?: TrustTrustTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
