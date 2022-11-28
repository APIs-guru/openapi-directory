import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";


export enum DeviceTypeSubdeviceRoleLabelEnum {
    Parent = "Parent",
    Child = "Child"
}

export enum DeviceTypeSubdeviceRoleValueEnum {
    Parent = "parent",
    Child = "child"
}


export class DeviceTypeSubdeviceRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: DeviceTypeSubdeviceRoleLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: DeviceTypeSubdeviceRoleValueEnum;
}


export class DeviceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=front_image" })
  frontImage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_full_depth" })
  isFullDepth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer: NestedManufacturer;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "json, name=part_number" })
  partNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=rear_image" })
  rearImage?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=subdevice_role" })
  subdeviceRole?: DeviceTypeSubdeviceRole;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=u_height" })
  uHeight?: number;
}
