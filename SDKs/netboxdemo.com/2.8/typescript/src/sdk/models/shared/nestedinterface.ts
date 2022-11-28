import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";


export enum NestedInterfaceConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}


export class NestedInterfaceConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: NestedInterfaceConnectionStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}


export class NestedInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cable" })
  cable?: number;

  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: NestedInterfaceConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
