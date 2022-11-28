import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableCircuitStatusEnum {
    Planned = "planned",
    Provisioning = "provisioning",
    Active = "active",
    Offline = "offline",
    Deprovisioning = "deprovisioning",
    Decommissioned = "decommissioned"
}


export class WritableCircuitInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cid" })
  cid: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=commit_rate" })
  commitRate?: number;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=install_date" })
  installDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WritableCircuitStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;
}
