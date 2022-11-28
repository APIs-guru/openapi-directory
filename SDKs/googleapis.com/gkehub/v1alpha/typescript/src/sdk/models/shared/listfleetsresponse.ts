import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";



// ListFleetsResponse
/** 
 * Response message for the `GkeHub.ListFleetsResponse` method.
**/
export class ListFleetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fleets", elemType: Fleet })
  fleets?: Fleet[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
