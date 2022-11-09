import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceNapalm extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method: Map<string, string>;
}
