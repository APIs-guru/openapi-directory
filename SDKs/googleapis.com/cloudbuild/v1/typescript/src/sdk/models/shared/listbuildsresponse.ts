import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";



// ListBuildsResponse
/** 
 * Response including listed builds.
**/
export class ListBuildsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builds", elemType: Build })
  builds?: Build[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
