import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildTrigger } from "./buildtrigger";



// ListBuildTriggersResponse
/** 
 * Response containing existing `BuildTriggers`.
**/
export class ListBuildTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: BuildTrigger })
  triggers?: BuildTrigger[];
}
