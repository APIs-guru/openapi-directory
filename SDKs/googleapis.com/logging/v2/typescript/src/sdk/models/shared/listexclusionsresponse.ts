import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogExclusion } from "./logexclusion";


// ListExclusionsResponse
/** 
 * Result returned from ListExclusions.
**/
export class ListExclusionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusions", elemType: shared.LogExclusion })
  exclusions?: LogExclusion[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
