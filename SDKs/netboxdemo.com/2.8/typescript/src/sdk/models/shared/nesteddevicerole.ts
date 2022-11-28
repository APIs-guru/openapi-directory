import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NestedDeviceRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;
}
