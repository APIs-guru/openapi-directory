import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritablePowerFeedPhaseEnum {
    SinglePhase = "single-phase"
,    ThreePhase = "three-phase"
}

export enum WritablePowerFeedStatusEnum {
    Offline = "offline"
,    Active = "active"
,    Planned = "planned"
,    Failed = "failed"
}

export enum WritablePowerFeedSupplyEnum {
    Ac = "ac"
,    Dc = "dc"
}

export enum WritablePowerFeedTypeEnum {
    Primary = "primary"
,    Redundant = "redundant"
}


export class WritablePowerFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=amperage" })
  amperage?: number;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=max_utilization" })
  maxUtilization?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=phase" })
  phase?: WritablePowerFeedPhaseEnum;

  @Metadata({ data: "json, name=power_panel" })
  powerPanel: number;

  @Metadata({ data: "json, name=rack" })
  rack?: number;

  @Metadata({ data: "json, name=status" })
  status?: WritablePowerFeedStatusEnum;

  @Metadata({ data: "json, name=supply" })
  supply?: WritablePowerFeedSupplyEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: WritablePowerFeedTypeEnum;

  @Metadata({ data: "json, name=voltage" })
  voltage?: number;
}
