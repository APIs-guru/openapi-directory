import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LocationIdSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationIds" })
  locationIds?: string[];
}
