import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritablePowerPortInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=power_outlet" })
  powerOutlet?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
