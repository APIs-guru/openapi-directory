import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocationIdSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationIds" })
  locationIds?: string[];
}
