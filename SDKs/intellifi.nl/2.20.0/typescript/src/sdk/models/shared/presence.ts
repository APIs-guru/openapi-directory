import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Item } from "./item";
import { Location } from "./location";
import { ProximityEnum } from "./proximityenum";
import { TechnologyEnum } from "./technologyenum";


export class Presence extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=item" })
  item?: Item;

  @Metadata({ data: "json, name=item_id" })
  itemId?: string;

  @Metadata({ data: "json, name=item_url" })
  itemUrl?: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=location_url" })
  locationUrl?: string;

  @Metadata({ data: "json, name=proximity" })
  proximity?: ProximityEnum;

  @Metadata({ data: "json, name=technology" })
  technology?: TechnologyEnum;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
