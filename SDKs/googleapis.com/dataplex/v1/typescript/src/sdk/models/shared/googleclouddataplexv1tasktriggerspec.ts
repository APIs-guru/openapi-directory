import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1TaskTriggerSpecTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    OnDemand = "ON_DEMAND"
,    Recurring = "RECURRING"
}


// GoogleCloudDataplexV1TaskTriggerSpec
/** 
 * Task scheduling and trigger settings.
**/
export class GoogleCloudDataplexV1TaskTriggerSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1TaskTriggerSpecTypeEnum;
}
