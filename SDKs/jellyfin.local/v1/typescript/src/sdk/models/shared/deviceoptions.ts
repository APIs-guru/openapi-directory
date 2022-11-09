import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomName" })
  customName?: string;
}
