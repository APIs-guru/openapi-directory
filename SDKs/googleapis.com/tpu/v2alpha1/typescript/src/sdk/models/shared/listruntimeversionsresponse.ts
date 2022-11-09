import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuntimeVersion } from "./runtimeversion";


// ListRuntimeVersionsResponse
/** 
 * Response for ListRuntimeVersions.
**/
export class ListRuntimeVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=runtimeVersions", elemType: shared.RuntimeVersion })
  runtimeVersions?: RuntimeVersion[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
