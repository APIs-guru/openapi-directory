import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1TaskTriggerSpecTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OnDemand = "ON_DEMAND",
    Recurring = "RECURRING"
}


// GoogleCloudDataplexV1TaskTriggerSpec
/** 
 * Task scheduling and trigger settings.
**/
export class GoogleCloudDataplexV1TaskTriggerSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1TaskTriggerSpecTypeEnum;
}
