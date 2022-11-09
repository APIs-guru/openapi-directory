import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableInterfaceConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface_a" })
  interfaceA: number;

  @Metadata({ data: "json, name=interface_b" })
  interfaceB: number;
}
