import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectorySite } from "./directorysite";



// DirectorySitesListResponse
/** 
 * Directory Site List Response
**/
export class DirectorySitesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directorySites", elemType: DirectorySite })
  directorySites?: DirectorySite[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
