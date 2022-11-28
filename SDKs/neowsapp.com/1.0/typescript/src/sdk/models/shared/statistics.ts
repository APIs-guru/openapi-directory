import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Url } from "./url";



export class Statistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_approach_count" })
  closeApproachCount?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=nasa_jpl_url" })
  nasaJplUrl?: Url;

  @SpeakeasyMetadata({ data: "json, name=near_earth_object_count" })
  nearEarthObjectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
