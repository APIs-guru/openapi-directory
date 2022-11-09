import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Build } from "./build";


// ListBuildsResponse
/** 
 * Response including listed builds.
**/
export class ListBuildsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=builds", elemType: shared.Build })
  builds?: Build[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
