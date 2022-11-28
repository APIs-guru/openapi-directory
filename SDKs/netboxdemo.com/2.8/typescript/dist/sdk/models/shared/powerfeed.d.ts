import { SpeakeasyBase } from "../../../internal/utils";
import { NestedPowerPanel } from "./nestedpowerpanel";
import { NestedRack } from "./nestedrack";
export declare enum PowerFeedPhaseLabelEnum {
    SinglePhase = "Single phase",
    ThreePhase = "Three-phase"
}
export declare enum PowerFeedPhaseValueEnum {
    SinglePhase = "single-phase",
    ThreePhase = "three-phase"
}
export declare class PowerFeedPhase extends SpeakeasyBase {
    label: PowerFeedPhaseLabelEnum;
    value: PowerFeedPhaseValueEnum;
}
export declare enum PowerFeedStatusLabelEnum {
    Offline = "Offline",
    Active = "Active",
    Planned = "Planned",
    Failed = "Failed"
}
export declare enum PowerFeedStatusValueEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Failed = "failed"
}
export declare class PowerFeedStatus extends SpeakeasyBase {
    label: PowerFeedStatusLabelEnum;
    value: PowerFeedStatusValueEnum;
}
export declare enum PowerFeedSupplyLabelEnum {
    Ac = "AC",
    Dc = "DC"
}
export declare enum PowerFeedSupplyValueEnum {
    Ac = "ac",
    Dc = "dc"
}
export declare class PowerFeedSupply extends SpeakeasyBase {
    label: PowerFeedSupplyLabelEnum;
    value: PowerFeedSupplyValueEnum;
}
export declare enum PowerFeedTypeLabelEnum {
    Primary = "Primary",
    Redundant = "Redundant"
}
export declare enum PowerFeedTypeValueEnum {
    Primary = "primary",
    Redundant = "redundant"
}
export declare class PowerFeedType extends SpeakeasyBase {
    label: PowerFeedTypeLabelEnum;
    value: PowerFeedTypeValueEnum;
}
export declare class PowerFeed extends SpeakeasyBase {
    amperage?: number;
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    id?: number;
    lastUpdated?: Date;
    maxUtilization?: number;
    name: string;
    phase?: PowerFeedPhase;
    powerPanel: NestedPowerPanel;
    rack?: NestedRack;
    status?: PowerFeedStatus;
    supply?: PowerFeedSupply;
    tags?: string[];
    type?: PowerFeedType;
    voltage?: number;
}
