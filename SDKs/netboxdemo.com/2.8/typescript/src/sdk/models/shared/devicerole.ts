import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;

  @Metadata({ data: "json, name=vm_role" })
  vmRole?: boolean;
}
