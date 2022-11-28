import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TrustTrustDirectionEnum {
    TrustDirectionUnspecified = "TRUST_DIRECTION_UNSPECIFIED",
    Inbound = "INBOUND",
    Outbound = "OUTBOUND",
    Bidirectional = "BIDIRECTIONAL"
}
export declare enum TrustTrustTypeEnum {
    TrustTypeUnspecified = "TRUST_TYPE_UNSPECIFIED",
    Forest = "FOREST",
    External = "EXTERNAL"
}
export declare enum TrustStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED"
}
/**
 * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain. If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export declare class TrustInput extends SpeakeasyBase {
    selectiveAuthentication?: boolean;
    targetDnsIpAddresses?: string[];
    targetDomainName?: string;
    trustDirection?: TrustTrustDirectionEnum;
    trustHandshakeSecret?: string;
    trustType?: TrustTrustTypeEnum;
}
/**
 * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain. If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export declare class Trust extends SpeakeasyBase {
    createTime?: string;
    lastTrustHeartbeatTime?: string;
    selectiveAuthentication?: boolean;
    state?: TrustStateEnum;
    stateDescription?: string;
    targetDnsIpAddresses?: string[];
    targetDomainName?: string;
    trustDirection?: TrustTrustDirectionEnum;
    trustHandshakeSecret?: string;
    trustType?: TrustTrustTypeEnum;
    updateTime?: string;
}
