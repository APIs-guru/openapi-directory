import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogView } from "./logview";


// ListViewsResponse
/** 
 * The response from ListViews.
**/
export class ListViewsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=views", elemType: shared.LogView })
  views?: LogView[];
}
