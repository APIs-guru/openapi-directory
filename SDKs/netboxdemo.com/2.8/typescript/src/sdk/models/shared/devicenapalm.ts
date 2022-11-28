import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceNapalm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method: Map<string, string>;
}
