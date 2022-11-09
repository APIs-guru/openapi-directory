import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableInventoryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device: number;

  @Metadata({ data: "json, name=discovered" })
  discovered?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: number;

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
