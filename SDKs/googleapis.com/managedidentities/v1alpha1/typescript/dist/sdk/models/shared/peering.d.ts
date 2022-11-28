import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PeeringStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED",
    Deleting = "DELETING"
}
/**
 * Represents a Managed Microsoft Identities Peering.
**/
export declare class PeeringInput extends SpeakeasyBase {
    authorizedNetwork?: string;
    domainResource?: string;
    labels?: Map<string, string>;
}
/**
 * Represents a Managed Microsoft Identities Peering.
**/
export declare class Peering extends SpeakeasyBase {
    authorizedNetwork?: string;
    createTime?: string;
    domainResource?: string;
    labels?: Map<string, string>;
    name?: string;
    state?: PeeringStateEnum;
    statusMessage?: string;
    updateTime?: string;
}
