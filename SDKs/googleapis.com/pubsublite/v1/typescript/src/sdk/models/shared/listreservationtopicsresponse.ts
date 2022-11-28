import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListReservationTopicsResponse
/** 
 * Response for ListReservationTopics.
**/
export class ListReservationTopicsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics?: string[];
}
