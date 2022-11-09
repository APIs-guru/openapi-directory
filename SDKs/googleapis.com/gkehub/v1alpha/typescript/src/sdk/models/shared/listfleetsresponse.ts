import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Fleet } from "./fleet";


// ListFleetsResponse
/** 
 * Response message for the `GkeHub.ListFleetsResponse` method.
**/
export class ListFleetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fleets", elemType: shared.Fleet })
  fleets?: Fleet[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
