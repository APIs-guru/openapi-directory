import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Matter } from "./matter";


// ListMattersResponse
/** 
 * Provides the list of matters.
**/
export class ListMattersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matters", elemType: shared.Matter })
  matters?: Matter[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
