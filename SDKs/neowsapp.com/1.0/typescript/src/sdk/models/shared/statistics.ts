import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Url } from "./url";


export class Statistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=close_approach_count" })
  closeApproachCount?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=nasa_jpl_url" })
  nasaJplUrl?: Url;

  @Metadata({ data: "json, name=near_earth_object_count" })
  nearEarthObjectCount?: number;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
