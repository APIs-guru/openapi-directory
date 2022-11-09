import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedSite } from "./nestedsite";


export class PowerPanel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=powerfeed_count" })
  powerfeedCount?: number;

  @Metadata({ data: "json, name=rack_group" })
  rackGroup?: NestedRackGroup;

  @Metadata({ data: "json, name=site" })
  site: NestedSite;
}
