import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableDeviceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @Metadata({ data: "json, name=interface_ordering" })
  interfaceOrdering?: number;

  @Metadata({ data: "json, name=is_console_server" })
  isConsoleServer?: boolean;

  @Metadata({ data: "json, name=is_full_depth" })
  isFullDepth?: boolean;

  @Metadata({ data: "json, name=is_network_device" })
  isNetworkDevice?: boolean;

  @Metadata({ data: "json, name=is_pdu" })
  isPdu?: boolean;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer: number;

  @Metadata({ data: "json, name=model" })
  model: string;

  @Metadata({ data: "json, name=part_number" })
  partNumber?: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=subdevice_role" })
  subdeviceRole?: boolean;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=u_height" })
  uHeight?: number;
}
