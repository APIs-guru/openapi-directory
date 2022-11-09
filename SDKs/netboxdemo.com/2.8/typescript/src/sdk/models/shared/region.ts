import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedRegion } from "./nestedregion";


export class Region extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent" })
  parent?: NestedRegion;

  @Metadata({ data: "json, name=site_count" })
  siteCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}
