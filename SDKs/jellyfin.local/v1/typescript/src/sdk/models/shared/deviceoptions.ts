import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomName" })
  customName?: string;
}
