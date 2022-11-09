import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";

export enum NestedInterfaceConnectionStatusLabelEnum {
    NotConnected = "Not Connected"
,    Connected = "Connected"
}


export class NestedInterfaceConnectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: NestedInterfaceConnectionStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: boolean;
}


export class NestedInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=cable" })
  cable?: number;

  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: NestedInterfaceConnectionStatus;

  @Metadata({ data: "json, name=device" })
  device?: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
