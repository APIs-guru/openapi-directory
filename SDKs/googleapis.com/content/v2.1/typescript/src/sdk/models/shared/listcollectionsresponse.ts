import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";



// ListCollectionsResponse
/** 
 * Response message for the ListCollections method.
**/
export class ListCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Collection })
  resources?: Collection[];
}
