import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildTrigger } from "./buildtrigger";


// ListBuildTriggersResponse
/** 
 * Response containing existing `BuildTriggers`.
**/
export class ListBuildTriggersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=triggers", elemType: shared.BuildTrigger })
  triggers?: BuildTrigger[];
}
