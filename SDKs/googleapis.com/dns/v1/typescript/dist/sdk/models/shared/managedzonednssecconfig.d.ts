import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKeySpec } from "./dnskeyspec";
export declare enum ManagedZoneDnsSecConfigNonExistenceEnum {
    Nsec = "nsec",
    Nsec3 = "nsec3"
}
export declare enum ManagedZoneDnsSecConfigStateEnum {
    Off = "off",
    On = "on",
    Transfer = "transfer"
}
export declare class ManagedZoneDnsSecConfig extends SpeakeasyBase {
    defaultKeySpecs?: DnsKeySpec[];
    kind?: string;
    nonExistence?: ManagedZoneDnsSecConfigNonExistenceEnum;
    state?: ManagedZoneDnsSecConfigStateEnum;
}
