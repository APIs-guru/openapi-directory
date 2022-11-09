import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedConsoleServerPort } from "./nestedconsoleserverport";
import { NestedDevice } from "./nesteddevice";


export class ConsolePort extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @Metadata({ data: "json, name=cs_port" })
  csPort?: NestedConsoleServerPort;

  @Metadata({ data: "json, name=device" })
  device: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
