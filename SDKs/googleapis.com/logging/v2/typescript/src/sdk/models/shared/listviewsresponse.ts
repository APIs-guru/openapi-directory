import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogView } from "./logview";



// ListViewsResponse
/** 
 * The response from ListViews.
**/
export class ListViewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=views", elemType: LogView })
  views?: LogView[];
}
