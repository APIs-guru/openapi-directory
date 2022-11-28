import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";



// ListOccurrencesResponse
/** 
 * Response including listed active occurrences.
**/
export class ListOccurrencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: Occurrence })
  occurrences?: Occurrence[];
}
