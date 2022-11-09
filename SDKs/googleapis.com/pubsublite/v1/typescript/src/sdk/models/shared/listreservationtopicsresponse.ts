import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListReservationTopicsResponse
/** 
 * Response for ListReservationTopics.
**/
export class ListReservationTopicsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=topics" })
  topics?: string[];
}
