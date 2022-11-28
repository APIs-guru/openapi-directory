import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKeySpec } from "./dnskeyspec";
export declare enum ManagedZoneDnsSecConfigNonExistenceEnum {
    Nsec = "NSEC",
    Nsec3 = "NSEC3"
}
export declare enum ManagedZoneDnsSecConfigStateEnum {
    Off = "OFF",
    On = "ON",
    Transfer = "TRANSFER"
}
export declare class ManagedZoneDnsSecConfig extends SpeakeasyBase {
    defaultKeySpecs?: DnsKeySpec[];
    kind?: string;
    nonExistence?: ManagedZoneDnsSecConfigNonExistenceEnum;
    state?: ManagedZoneDnsSecConfigStateEnum;
}
