import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagValue } from "./tagvalue";


// ListTagValuesResponse
/** 
 * The ListTagValues response.
**/
export class ListTagValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tagValues", elemType: shared.TagValue })
  tagValues?: TagValue[];
}
