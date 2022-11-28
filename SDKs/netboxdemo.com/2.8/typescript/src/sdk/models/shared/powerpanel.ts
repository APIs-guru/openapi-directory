import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedSite } from "./nestedsite";



export class PowerPanel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=powerfeed_count" })
  powerfeedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rack_group" })
  rackGroup?: NestedRackGroup;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: NestedSite;
}
