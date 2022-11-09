import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RequestOptionsPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED"
,    PriorityLow = "PRIORITY_LOW"
,    PriorityMedium = "PRIORITY_MEDIUM"
,    PriorityHigh = "PRIORITY_HIGH"
}


// RequestOptions
/** 
 * Common request options for various APIs.
**/
export class RequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=priority" })
  priority?: RequestOptionsPriorityEnum;

  @Metadata({ data: "json, name=requestTag" })
  requestTag?: string;

  @Metadata({ data: "json, name=transactionTag" })
  transactionTag?: string;
}
