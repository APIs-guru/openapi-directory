import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionProfile } from "./connectionprofile";


// ListConnectionProfilesResponse
/** 
 * Response message for 'ListConnectionProfiles' request.
**/
export class ListConnectionProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionProfiles", elemType: shared.ConnectionProfile })
  connectionProfiles?: ConnectionProfile[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
