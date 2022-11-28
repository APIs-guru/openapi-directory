import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCableInput } from "./nestedcable";
export declare enum WritableConsolePortTypeEnum {
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
export declare class WritableConsolePortInput extends SpeakeasyBase {
    cable?: NestedCableInput;
    connectionStatus?: boolean;
    description?: string;
    device: number;
    name: string;
    tags?: string[];
    type?: WritableConsolePortTypeEnum;
}
