import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedManufacturer } from "./nestedmanufacturer";


export class InventoryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device: NestedDevice;

  @Metadata({ data: "json, name=discovered" })
  discovered?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: NestedManufacturer;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent" })
  parent?: number;

  @Metadata({ data: "json, name=part_id" })
  partId?: string;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
