import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FormResponse } from "./formresponse";


// ListFormResponsesResponse
/** 
 * Response to a ListFormResponsesRequest.
**/
export class ListFormResponsesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=responses", elemType: shared.FormResponse })
  responses?: FormResponse[];
}
