import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedManufacturer } from "./nestedmanufacturer";



export class InventoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=discovered" })
  discovered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: NestedManufacturer;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: number;

  @SpeakeasyMetadata({ data: "json, name=part_id" })
  partId?: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
