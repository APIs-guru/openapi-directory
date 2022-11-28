import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedConsoleServerPort } from "./nestedconsoleserverport";
import { NestedDevice } from "./nesteddevice";



export class ConsolePort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cs_port" })
  csPort?: NestedConsoleServerPort;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
