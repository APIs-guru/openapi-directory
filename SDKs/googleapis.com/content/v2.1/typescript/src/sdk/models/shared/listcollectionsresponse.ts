import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Collection } from "./collection";


// ListCollectionsResponse
/** 
 * Response message for the ListCollections method.
**/
export class ListCollectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.Collection })
  resources?: Collection[];
}
