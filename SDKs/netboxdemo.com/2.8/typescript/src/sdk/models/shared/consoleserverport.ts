import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";

export enum ConsoleServerPortConnectionStatusLabelEnum {
    NotConnected = "Not Connected"
,    Connected = "Connected"
}


export class ConsoleServerPortConnectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: ConsoleServerPortConnectionStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: boolean;
}

export enum ConsoleServerPortTypeLabelEnum {
    De9 = "DE-9"
,    Db25 = "DB-25"
,    Rj11 = "RJ-11"
,    Rj12 = "RJ-12"
,    Rj45 = "RJ-45"
,    UsbTypeA = "USB Type A"
,    UsbTypeB = "USB Type B"
,    UsbTypeC = "USB Type C"
,    UsbMiniA = "USB Mini A"
,    UsbMiniB = "USB Mini B"
,    UsbMicroA = "USB Micro A"
,    UsbMicroB = "USB Micro B"
,    Other = "Other"
}

export enum ConsoleServerPortTypeValueEnum {
    De9 = "de-9"
,    Db25 = "db-25"
,    Rj11 = "rj-11"
,    Rj12 = "rj-12"
,    Rj45 = "rj-45"
,    UsbA = "usb-a"
,    UsbB = "usb-b"
,    UsbC = "usb-c"
,    UsbMiniA = "usb-mini-a"
,    UsbMiniB = "usb-mini-b"
,    UsbMicroA = "usb-micro-a"
,    UsbMicroB = "usb-micro-b"
,    Other = "other"
}


export class ConsoleServerPortType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: ConsoleServerPortTypeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: ConsoleServerPortTypeValueEnum;
}


export class ConsoleServerPort extends SpeakeasyBase {
  @Metadata({ data: "json, name=cable" })
  cable?: NestedCable;

  @Metadata({ data: "json, name=connected_endpoint" })
  connectedEndpoint?: Map<string, string>;

  @Metadata({ data: "json, name=connected_endpoint_type" })
  connectedEndpointType?: string;

  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: ConsoleServerPortConnectionStatus;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: ConsoleServerPortType;
}
