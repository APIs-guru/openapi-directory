import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagKey } from "./tagkey";



// ListTagKeysResponse
/** 
 * The ListTagKeys response message.
**/
export class ListTagKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tagKeys", elemType: TagKey })
  tagKeys?: TagKey[];
}
