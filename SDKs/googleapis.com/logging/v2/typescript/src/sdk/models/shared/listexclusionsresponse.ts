import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogExclusion } from "./logexclusion";



// ListExclusionsResponse
/** 
 * Result returned from ListExclusions.
**/
export class ListExclusionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusions", elemType: LogExclusion })
  exclusions?: LogExclusion[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
