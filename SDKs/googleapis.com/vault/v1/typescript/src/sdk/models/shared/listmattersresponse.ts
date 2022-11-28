import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Matter } from "./matter";



// ListMattersResponse
/** 
 * Provides the list of matters.
**/
export class ListMattersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matters", elemType: Matter })
  matters?: Matter[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
