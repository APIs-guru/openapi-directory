import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableDeviceTypeParentChildStatusEnum {
    Parent = "parent"
,    Child = "child"
}


export class WritableDeviceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=front_image" })
  frontImage?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_full_depth" })
  isFullDepth?: boolean;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer: number;

  @Metadata({ data: "json, name=model" })
  model: string;

  @Metadata({ data: "json, name=part_number" })
  partNumber?: string;

  @Metadata({ data: "json, name=rear_image" })
  rearImage?: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=subdevice_role" })
  subdeviceRole?: WritableDeviceTypeParentChildStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=u_height" })
  uHeight?: number;
}
