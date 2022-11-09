import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectorySite } from "./directorysite";


// DirectorySitesListResponse
/** 
 * Directory Site List Response
**/
export class DirectorySitesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=directorySites", elemType: shared.DirectorySite })
  directorySites?: DirectorySite[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
