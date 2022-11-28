import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableInterfaceConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=interface_a" })
  interfaceA: number;

  @SpeakeasyMetadata({ data: "json, name=interface_b" })
  interfaceB: number;
}
