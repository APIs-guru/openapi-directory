import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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
  protocol: number;

  @SpeakeasyMetadata({ data: "json, name=virtual_machine" })
  virtualMachine?: number;
}
