import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableCircuitStatusEnum {
    Planned = "planned"
,    Provisioning = "provisioning"
,    Active = "active"
,    Offline = "offline"
,    Deprovisioning = "deprovisioning"
,    Decommissioned = "decommissioned"
}


export class WritableCircuit extends SpeakeasyBase {
  @Metadata({ data: "json, name=cid" })
  cid: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=commit_rate" })
  commitRate?: number;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=install_date" })
  installDate?: Date;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=provider" })
  provider: number;

  @Metadata({ data: "json, name=status" })
  status?: WritableCircuitStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=termination_a" })
  terminationA?: string;

  @Metadata({ data: "json, name=termination_z" })
  terminationZ?: string;

  @Metadata({ data: "json, name=type" })
  type: number;
}
