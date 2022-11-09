import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceIpAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=family" })
  family?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
