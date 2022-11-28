import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedProvider } from "./nestedprovider";
import { NestedTenant } from "./nestedtenant";
import { CircuitCircuitTermination } from "./circuitcircuittermination";
import { NestedCircuitType } from "./nestedcircuittype";


export enum CircuitStatusLabelEnum {
    Planned = "Planned",
    Provisioning = "Provisioning",
    Active = "Active",
    Offline = "Offline",
    Deprovisioning = "Deprovisioning",
    Decommissioned = "Decommissioned"
}

export enum CircuitStatusValueEnum {
    Planned = "planned",
    Provisioning = "provisioning",
    Active = "active",
    Offline = "offline",
    Deprovisioning = "deprovisioning",
    Decommissioned = "decommissioned"
}


export class CircuitStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: CircuitStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: CircuitStatusValueEnum;
}


export class Circuit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cid" })
  cid: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_rate" })
  commitRate?: number;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=install_date" })
  installDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: NestedProvider;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CircuitStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=termination_a" })
  terminationA?: CircuitCircuitTermination;

  @SpeakeasyMetadata({ data: "json, name=termination_z" })
  terminationZ?: CircuitCircuitTermination;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: NestedCircuitType;
}
