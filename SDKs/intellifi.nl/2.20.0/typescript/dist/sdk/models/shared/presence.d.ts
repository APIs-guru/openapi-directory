import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { Location } from "./location";
import { ProximityEnum } from "./proximityenum";
import { TechnologyEnum } from "./technologyenum";
export declare class Presence extends SpeakeasyBase {
    id?: string;
    item?: Item;
    itemId?: string;
    itemUrl?: string;
    location?: Location;
    locationId?: string;
    locationUrl?: string;
    proximity?: ProximityEnum;
    technology?: TechnologyEnum;
    timeCreated?: string;
    timeUpdated?: string;
    url?: string;
}
