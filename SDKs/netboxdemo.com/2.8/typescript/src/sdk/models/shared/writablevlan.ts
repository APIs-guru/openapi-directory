import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableVlanStatusEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}


export class WritableVlanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: number;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WritableVlanStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=vid" })
  vid: number;
}
