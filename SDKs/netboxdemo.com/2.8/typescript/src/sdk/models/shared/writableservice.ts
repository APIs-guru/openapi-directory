import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableServiceProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}


export class WritableServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: number;

  @SpeakeasyMetadata({ data: "json, name=ipaddresses" })
  ipaddresses?: number[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: WritableServiceProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=virtual_machine" })
  virtualMachine?: number;
}
