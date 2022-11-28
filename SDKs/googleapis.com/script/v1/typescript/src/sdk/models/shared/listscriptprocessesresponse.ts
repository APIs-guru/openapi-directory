import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeProcess } from "./googleappsscripttypeprocess";



// ListScriptProcessesResponse
/** 
 * Response with the list of Process resources.
**/
export class ListScriptProcessesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processes", elemType: GoogleAppsScriptTypeProcess })
  processes?: GoogleAppsScriptTypeProcess[];
}
