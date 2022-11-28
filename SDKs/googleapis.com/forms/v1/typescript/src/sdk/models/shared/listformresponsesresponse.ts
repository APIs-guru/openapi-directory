import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormResponse } from "./formresponse";



// ListFormResponsesResponse
/** 
 * Response to a ListFormResponsesRequest.
**/
export class ListFormResponsesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=responses", elemType: FormResponse })
  responses?: FormResponse[];
}
