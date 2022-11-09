import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedPowerPanel } from "./nestedpowerpanel";
import { NestedRack } from "./nestedrack";

export enum PowerFeedPhaseLabelEnum {
    SinglePhase = "Single phase"
,    ThreePhase = "Three-phase"
}

export enum PowerFeedPhaseValueEnum {
    SinglePhase = "single-phase"
,    ThreePhase = "three-phase"
}


export class PowerFeedPhase extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: PowerFeedPhaseLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: PowerFeedPhaseValueEnum;
}

export enum PowerFeedStatusLabelEnum {
    Offline = "Offline"
,    Active = "Active"
,    Planned = "Planned"
,    Failed = "Failed"
}

export enum PowerFeedStatusValueEnum {
    Offline = "offline"
,    Active = "active"
,    Planned = "planned"
,    Failed = "failed"
}


export class PowerFeedStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: PowerFeedStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: PowerFeedStatusValueEnum;
}

export enum PowerFeedSupplyLabelEnum {
    Ac = "AC"
,    Dc = "DC"
}

export enum PowerFeedSupplyValueEnum {
    Ac = "ac"
,    Dc = "dc"
}


export class PowerFeedSupply extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: PowerFeedSupplyLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: PowerFeedSupplyValueEnum;
}

export enum PowerFeedTypeLabelEnum {
    Primary = "Primary"
,    Redundant = "Redundant"
}

export enum PowerFeedTypeValueEnum {
    Primary = "primary"
,    Redundant = "redundant"
}


export class PowerFeedType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: PowerFeedTypeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: PowerFeedTypeValueEnum;
}


export class PowerFeed extends SpeakeasyBase {
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
  phase?: PowerFeedPhase;

  @Metadata({ data: "json, name=power_panel" })
  powerPanel: NestedPowerPanel;

  @Metadata({ data: "json, name=rack" })
  rack?: NestedRack;

  @Metadata({ data: "json, name=status" })
  status?: PowerFeedStatus;

  @Metadata({ data: "json, name=supply" })
  supply?: PowerFeedSupply;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: PowerFeedType;

  @Metadata({ data: "json, name=voltage" })
  voltage?: number;
}
