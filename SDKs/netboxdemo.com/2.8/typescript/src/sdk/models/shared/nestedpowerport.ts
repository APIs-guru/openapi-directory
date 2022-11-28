import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";


export enum NestedPowerPortConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}


export class NestedPowerPortConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: NestedPowerPortConnectionStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}


export class NestedPowerPort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cable" })
  cable?: number;

  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: NestedPowerPortConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
