import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableVirtualMachineWithConfigContextStatusEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Staged = "staged",
    Failed = "failed",
    Decommissioning = "decommissioning"
}


export class WritableVirtualMachineWithConfigContextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: number;

  @SpeakeasyMetadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_ip4" })
  primaryIp4?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_ip6" })
  primaryIp6?: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WritableVirtualMachineWithConfigContextStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
