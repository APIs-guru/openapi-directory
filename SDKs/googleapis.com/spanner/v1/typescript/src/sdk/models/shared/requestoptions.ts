import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RequestOptionsPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    PriorityLow = "PRIORITY_LOW",
    PriorityMedium = "PRIORITY_MEDIUM",
    PriorityHigh = "PRIORITY_HIGH"
}


// RequestOptions
/** 
 * Common request options for various APIs.
**/
export class RequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: RequestOptionsPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=requestTag" })
  requestTag?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionTag" })
  transactionTag?: string;
}
