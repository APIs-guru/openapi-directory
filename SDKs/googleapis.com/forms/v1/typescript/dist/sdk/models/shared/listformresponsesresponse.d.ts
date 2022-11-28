import { SpeakeasyBase } from "../../../internal/utils";
import { FormResponse } from "./formresponse";
/**
 * Response to a ListFormResponsesRequest.
**/
export declare class ListFormResponsesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    responses?: FormResponse[];
}
