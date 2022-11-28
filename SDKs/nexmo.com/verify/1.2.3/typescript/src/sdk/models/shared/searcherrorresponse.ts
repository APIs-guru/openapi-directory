import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SearchErrorResponseStatusEnum {
    InProgress = "IN PROGRESS",
    Failed = "FAILED",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED",
    OneHundredAndOne = "101"
}


// SearchErrorResponse
/** 
 * Error
**/
export class SearchErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_text" })
  errorText?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SearchErrorResponseStatusEnum;
}
