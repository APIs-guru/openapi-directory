import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NearEarthObjectList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=element_count" })
  elementCount?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=near_earth_objects" })
  nearEarthObjects?: any;
}
