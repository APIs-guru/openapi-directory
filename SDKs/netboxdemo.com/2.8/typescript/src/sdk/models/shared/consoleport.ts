import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";


export enum ConsolePortConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}


export class ConsolePortConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: ConsolePortConnectionStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}

export enum ConsolePortTypeLabelEnum {
    De9 = "DE-9",
    Db25 = "DB-25",
    Rj11 = "RJ-11",
    Rj12 = "RJ-12",
    Rj45 = "RJ-45",
    UsbTypeA = "USB Type A",
    UsbTypeB = "USB Type B",
    UsbTypeC = "USB Type C",
    UsbMiniA = "USB Mini A",
    UsbMiniB = "USB Mini B",
    UsbMicroA = "USB Micro A",
    UsbMicroB = "USB Micro B",
    Other = "Other"
}

export enum ConsolePortTypeValueEnum {
    De9 = "de-9",
    Db25 = "db-25",
    Rj11 = "rj-11",
    Rj12 = "rj-12",
    Rj45 = "rj-45",
    UsbA = "usb-a",
    UsbB = "usb-b",
    UsbC = "usb-c",
    UsbMiniA = "usb-mini-a",
    UsbMiniB = "usb-mini-b",
    UsbMicroA = "usb-micro-a",
    UsbMicroB = "usb-micro-b",
    Other = "other"
}


export class ConsolePortType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: ConsolePortTypeLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: ConsolePortTypeValueEnum;
}


export class ConsolePort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cable" })
  cable?: NestedCable;

  @SpeakeasyMetadata({ data: "json, name=connected_endpoint" })
  connectedEndpoint?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=connected_endpoint_type" })
  connectedEndpointType?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: ConsolePortConnectionStatus;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ConsolePortType;
}
