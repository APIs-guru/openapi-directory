import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagKey } from "./tagkey";


// ListTagKeysResponse
/** 
 * The ListTagKeys response message.
**/
export class ListTagKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tagKeys", elemType: shared.TagKey })
  tagKeys?: TagKey[];
}
