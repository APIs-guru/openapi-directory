import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDeviceType } from "./nesteddevicetype";



export class ConsolePortTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
