import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocationList } from "./locationlist";


export class ListLocationListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationLists", elemType: shared.LocationList })
  locationLists?: LocationList[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
