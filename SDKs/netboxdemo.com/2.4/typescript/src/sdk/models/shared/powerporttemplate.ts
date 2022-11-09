import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDeviceType } from "./nesteddevicetype";


export class PowerPortTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}
