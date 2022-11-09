import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";


export class DeviceVirtualChassis extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=master" })
  master: NestedDevice;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
