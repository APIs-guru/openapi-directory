import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedSite } from "./nestedsite";


export class RackGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent" })
  parent?: NestedRackGroup;

  @Metadata({ data: "json, name=rack_count" })
  rackCount?: number;

  @Metadata({ data: "json, name=site" })
  site: NestedSite;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}
