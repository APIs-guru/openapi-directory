import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritablePowerFeedPhaseEnum {
    SinglePhase = "single-phase",
    ThreePhase = "three-phase"
}
export declare enum WritablePowerFeedStatusEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Failed = "failed"
}
export declare enum WritablePowerFeedSupplyEnum {
    Ac = "ac",
    Dc = "dc"
}
export declare enum WritablePowerFeedTypeEnum {
    Primary = "primary",
    Redundant = "redundant"
}
export declare class WritablePowerFeedInput extends SpeakeasyBase {
    amperage?: number;
    comments?: string;
    customFields?: Map<string, any>;
    maxUtilization?: number;
    name: string;
    phase?: WritablePowerFeedPhaseEnum;
    powerPanel: number;
    rack?: number;
    status?: WritablePowerFeedStatusEnum;
    supply?: WritablePowerFeedSupplyEnum;
    tags?: string[];
    type?: WritablePowerFeedTypeEnum;
    voltage?: number;
}
