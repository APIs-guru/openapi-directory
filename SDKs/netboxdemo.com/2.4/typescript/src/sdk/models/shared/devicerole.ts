import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceRoleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=vm_role" })
  vmRole?: boolean;
}


export class DeviceRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=vm_role" })
  vmRole?: boolean;
}
