import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCable } from "./nestedcable";

export enum WritableConsoleServerPortTypeEnum {
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


export class WritableConsoleServerPort extends SpeakeasyBase {
  @Metadata({ data: "json, name=cable" })
  cable?: NestedCable;

  @Metadata({ data: "json, name=connected_endpoint" })
  connectedEndpoint?: Map<string, string>;

  @Metadata({ data: "json, name=connected_endpoint_type" })
  connectedEndpointType?: string;

  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: WritableConsoleServerPortTypeEnum;
}
