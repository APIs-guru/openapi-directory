import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionProfile } from "./connectionprofile";


export class ListConnectionProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionProfiles", elemType: shared.ConnectionProfile })
  connectionProfiles?: ConnectionProfile[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
