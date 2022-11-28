import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableConsolePortInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cs_port" })
  csPort?: number;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
