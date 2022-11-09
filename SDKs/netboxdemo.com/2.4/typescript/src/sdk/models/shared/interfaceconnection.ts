import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedInterface } from "./nestedinterface";
import { NestedInterface } from "./nestedinterface";


export class InterfaceConnectionConnectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: boolean;
}


export class InterfaceConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: InterfaceConnectionConnectionStatus;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface_a" })
  interfaceA: NestedInterface;

  @Metadata({ data: "json, name=interface_b" })
  interfaceB: NestedInterface;
}
