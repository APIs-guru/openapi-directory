import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";



export class DeviceBay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=installed_device" })
  installedDevice?: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
