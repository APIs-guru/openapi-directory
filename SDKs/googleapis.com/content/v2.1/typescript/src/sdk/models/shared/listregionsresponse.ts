import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Region } from "./region";


// ListRegionsResponse
/** 
 * Response message for the `ListRegions` method.
**/
export class ListRegionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=regions", elemType: shared.Region })
  regions?: Region[];
}
