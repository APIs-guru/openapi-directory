import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsScriptTypeProcess } from "./googleappsscripttypeprocess";


// ListScriptProcessesResponse
/** 
 * Response with the list of Process resources.
**/
export class ListScriptProcessesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=processes", elemType: shared.GoogleAppsScriptTypeProcess })
  processes?: GoogleAppsScriptTypeProcess[];
}
