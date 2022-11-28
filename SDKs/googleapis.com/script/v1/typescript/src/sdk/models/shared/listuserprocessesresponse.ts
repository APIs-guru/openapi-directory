import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeProcess } from "./googleappsscripttypeprocess";



// ListUserProcessesResponse
/** 
 * Response with the list of Process resources.
**/
export class ListUserProcessesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processes", elemType: GoogleAppsScriptTypeProcess })
  processes?: GoogleAppsScriptTypeProcess[];
}
