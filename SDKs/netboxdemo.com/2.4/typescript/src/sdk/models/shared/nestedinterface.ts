import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";


export class NestedInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_connected" })
  isConnected?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
