import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedInterface } from "./nestedinterface";



export class InterfaceConnectionConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}


export class InterfaceConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: InterfaceConnectionConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interface_a" })
  interfaceA: NestedInterface;

  @SpeakeasyMetadata({ data: "json, name=interface_b" })
  interfaceB: NestedInterface;
}
