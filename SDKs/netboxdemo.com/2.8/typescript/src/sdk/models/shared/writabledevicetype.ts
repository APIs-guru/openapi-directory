import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableDeviceTypeParentChildStatusEnum {
    Parent = "parent",
    Child = "child"
}


export class WritableDeviceTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=is_full_depth" })
  isFullDepth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "json, name=part_number" })
  partNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=subdevice_role" })
  subdeviceRole?: WritableDeviceTypeParentChildStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=u_height" })
  uHeight?: number;
}
