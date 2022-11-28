import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { Location } from "./location";
import { ProximityEnum } from "./proximityenum";
import { TechnologyEnum } from "./technologyenum";



export class Presence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: Item;

  @SpeakeasyMetadata({ data: "json, name=item_id" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=item_url" })
  itemUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=location_url" })
  locationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=proximity" })
  proximity?: ProximityEnum;

  @SpeakeasyMetadata({ data: "json, name=technology" })
  technology?: TechnologyEnum;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
