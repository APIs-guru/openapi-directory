import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TrustStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED"
}
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
/**
 * Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export declare class Trust extends SpeakeasyBase {
    createTime?: string;
    lastKnownTrustConnectedHeartbeatTime?: string;
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
