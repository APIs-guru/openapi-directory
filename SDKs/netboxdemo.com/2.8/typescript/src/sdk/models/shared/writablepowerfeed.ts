import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritablePowerFeedPhaseEnum {
    SinglePhase = "single-phase",
    ThreePhase = "three-phase"
}

export enum WritablePowerFeedStatusEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Failed = "failed"
}

export enum WritablePowerFeedSupplyEnum {
    Ac = "ac",
    Dc = "dc"
}

export enum WritablePowerFeedTypeEnum {
    Primary = "primary",
    Redundant = "redundant"
}


export class WritablePowerFeedInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amperage" })
  amperage?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_utilization" })
  maxUtilization?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: WritablePowerFeedPhaseEnum;

  @SpeakeasyMetadata({ data: "json, name=power_panel" })
  powerPanel: number;

  @SpeakeasyMetadata({ data: "json, name=rack" })
  rack?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WritablePowerFeedStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supply" })
  supply?: WritablePowerFeedSupplyEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WritablePowerFeedTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=voltage" })
  voltage?: number;
}
