import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfile } from "./connectionprofile";



// ListConnectionProfilesResponse
/** 
 * Response message for 'ListConnectionProfiles' request.
**/
export class ListConnectionProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionProfiles", elemType: ConnectionProfile })
  connectionProfiles?: ConnectionProfile[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
