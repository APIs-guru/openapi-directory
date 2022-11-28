import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagValue } from "./tagvalue";



// ListTagValuesResponse
/** 
 * The ListTagValues response.
**/
export class ListTagValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tagValues", elemType: TagValue })
  tagValues?: TagValue[];
}
