import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";

export enum NestedPowerPortConnectionStatusLabelEnum {
    NotConnected = "Not Connected"
,    Connected = "Connected"
}


export class NestedPowerPortConnectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: NestedPowerPortConnectionStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: boolean;
}


export class NestedPowerPort extends SpeakeasyBase {
  @Metadata({ data: "json, name=cable" })
  cable?: number;

  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: NestedPowerPortConnectionStatus;

  @Metadata({ data: "json, name=device" })
  device?: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
