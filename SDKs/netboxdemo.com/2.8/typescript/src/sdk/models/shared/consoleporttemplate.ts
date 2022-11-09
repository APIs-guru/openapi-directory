import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDeviceType } from "./nesteddevicetype";

export enum ConsolePortTemplateTypeLabelEnum {
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

export enum ConsolePortTemplateTypeValueEnum {
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


export class ConsolePortTemplateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: ConsolePortTemplateTypeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: ConsolePortTemplateTypeValueEnum;
}


export class ConsolePortTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type?: ConsolePortTemplateType;
}
