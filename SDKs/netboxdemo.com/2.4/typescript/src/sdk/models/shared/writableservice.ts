import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableService extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=ipaddresses" })
  ipaddresses?: number[];

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: number;

  @Metadata({ data: "json, name=virtual_machine" })
  virtualMachine?: number;
}
