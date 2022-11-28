import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceIpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
