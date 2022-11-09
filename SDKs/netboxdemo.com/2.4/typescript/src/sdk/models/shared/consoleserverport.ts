import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";


export class ConsoleServerPort extends SpeakeasyBase {
  @Metadata({ data: "json, name=connected_console" })
  connectedConsole?: string;

  @Metadata({ data: "json, name=device" })
  device: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
