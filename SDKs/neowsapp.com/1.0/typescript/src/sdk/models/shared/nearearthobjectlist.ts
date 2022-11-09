import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NearEarthObjectList extends SpeakeasyBase {
  @Metadata({ data: "json, name=element_count" })
  elementCount?: number;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=near_earth_objects" })
  nearEarthObjects?: any;
}
