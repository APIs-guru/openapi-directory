import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableConsoleServerPortTemplateTypeEnum {
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
export declare class WritableConsoleServerPortTemplateInput extends SpeakeasyBase {
    deviceType: number;
    name: string;
    type?: WritableConsoleServerPortTemplateTypeEnum;
}
