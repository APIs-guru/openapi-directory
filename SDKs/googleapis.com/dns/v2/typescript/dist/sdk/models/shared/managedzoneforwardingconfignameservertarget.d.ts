import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum {
    Default = "DEFAULT",
    Private = "PRIVATE"
}
export declare class ManagedZoneForwardingConfigNameServerTarget extends SpeakeasyBase {
    forwardingPath?: ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;
    ipv4Address?: string;
    ipv6Address?: string;
    kind?: string;
}
