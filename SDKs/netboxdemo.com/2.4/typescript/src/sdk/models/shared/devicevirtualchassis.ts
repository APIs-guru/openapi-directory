import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";



export class DeviceVirtualChassis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=master" })
  master: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
