import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum {
    Default = "DEFAULT",
    Private = "PRIVATE"
}
export declare class PolicyAlternativeNameServerConfigTargetNameServer extends SpeakeasyBase {
    forwardingPath?: PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;
    ipv4Address?: string;
    ipv6Address?: string;
    kind?: string;
}
