import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableDeviceBay extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=installed_device" })
  installedDevice?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
