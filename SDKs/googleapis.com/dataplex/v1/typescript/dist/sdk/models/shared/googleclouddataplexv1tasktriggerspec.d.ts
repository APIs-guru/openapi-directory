import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1TaskTriggerSpecTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OnDemand = "ON_DEMAND",
    Recurring = "RECURRING"
}
/**
 * Task scheduling and trigger settings.
**/
export declare class GoogleCloudDataplexV1TaskTriggerSpec extends SpeakeasyBase {
    disabled?: boolean;
    maxRetries?: number;
    schedule?: string;
    startTime?: string;
    type?: GoogleCloudDataplexV1TaskTriggerSpecTypeEnum;
}
