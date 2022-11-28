import { SpeakeasyBase } from "../../../internal/utils";
import { NestedProvider } from "./nestedprovider";
import { NestedTenant } from "./nestedtenant";
import { CircuitCircuitTermination } from "./circuitcircuittermination";
import { NestedCircuitType } from "./nestedcircuittype";
export declare enum CircuitStatusLabelEnum {
    Planned = "Planned",
    Provisioning = "Provisioning",
    Active = "Active",
    Offline = "Offline",
    Deprovisioning = "Deprovisioning",
    Decommissioned = "Decommissioned"
}
export declare enum CircuitStatusValueEnum {
    Planned = "planned",
    Provisioning = "provisioning",
    Active = "active",
    Offline = "offline",
    Deprovisioning = "deprovisioning",
    Decommissioned = "decommissioned"
}
export declare class CircuitStatus extends SpeakeasyBase {
    label: CircuitStatusLabelEnum;
    value: CircuitStatusValueEnum;
}
export declare class Circuit extends SpeakeasyBase {
    cid: string;
    comments?: string;
    commitRate?: number;
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    id?: number;
    installDate?: Date;
    lastUpdated?: Date;
    provider: NestedProvider;
    status?: CircuitStatus;
    tags?: string[];
    tenant?: NestedTenant;
    terminationA?: CircuitCircuitTermination;
    terminationZ?: CircuitCircuitTermination;
    type: NestedCircuitType;
}
