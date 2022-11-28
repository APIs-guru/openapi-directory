import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDeviceType } from "./nesteddevicetype";


export enum ConsoleServerPortTemplateTypeLabelEnum {
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

export enum ConsoleServerPortTemplateTypeValueEnum {
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


export class ConsoleServerPortTemplateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: ConsoleServerPortTemplateTypeLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: ConsoleServerPortTemplateTypeValueEnum;
}


export class ConsoleServerPortTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ConsoleServerPortTemplateType;
}
