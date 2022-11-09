import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableConsolePortTemplateTypeEnum {
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


export class WritableConsolePortTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type?: WritableConsolePortTemplateTypeEnum;
}
