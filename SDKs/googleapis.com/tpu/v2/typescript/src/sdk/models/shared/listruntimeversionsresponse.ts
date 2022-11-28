import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeVersion } from "./runtimeversion";



// ListRuntimeVersionsResponse
/** 
 * Response for ListRuntimeVersions.
**/
export class ListRuntimeVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeVersions", elemType: RuntimeVersion })
  runtimeVersions?: RuntimeVersion[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
