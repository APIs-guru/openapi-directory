import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SearchErrorResponseStatusEnum {
    InProgress = "IN PROGRESS"
,    Failed = "FAILED"
,    Expired = "EXPIRED"
,    Cancelled = "CANCELLED"
,    OneHundredAndOne = "101"
}


// SearchErrorResponse
/** 
 * Error
**/
export class SearchErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_text" })
  errorText?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status?: SearchErrorResponseStatusEnum;
}
