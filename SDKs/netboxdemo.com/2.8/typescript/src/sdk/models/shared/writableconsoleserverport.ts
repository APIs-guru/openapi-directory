import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCableInput } from "./nestedcable";


export enum WritableConsoleServerPortTypeEnum {
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


export class WritableConsoleServerPortInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cable" })
  cable?: NestedCableInput;

  @SpeakeasyMetadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WritableConsoleServerPortTypeEnum;
}
