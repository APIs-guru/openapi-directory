import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";



export class DeviceTypeInterfaceOrdering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class DeviceTypeSubdeviceRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}


export class DeviceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=interface_ordering" })
  interfaceOrdering?: DeviceTypeInterfaceOrdering;

  @SpeakeasyMetadata({ data: "json, name=is_console_server" })
  isConsoleServer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_full_depth" })
  isFullDepth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_network_device" })
  isNetworkDevice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_pdu" })
  isPdu?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer: NestedManufacturer;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "json, name=part_number" })
  partNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=subdevice_role" })
  subdeviceRole?: DeviceTypeSubdeviceRole;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=u_height" })
  uHeight?: number;
}
