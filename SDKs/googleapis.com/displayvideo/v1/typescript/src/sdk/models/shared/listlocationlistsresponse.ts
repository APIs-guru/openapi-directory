import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationList } from "./locationlist";



export class ListLocationListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationLists", elemType: LocationList })
  locationLists?: LocationList[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
