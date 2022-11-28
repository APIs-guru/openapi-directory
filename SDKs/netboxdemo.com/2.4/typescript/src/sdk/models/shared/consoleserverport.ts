import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";



export class ConsoleServerPort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connected_console" })
  connectedConsole?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
