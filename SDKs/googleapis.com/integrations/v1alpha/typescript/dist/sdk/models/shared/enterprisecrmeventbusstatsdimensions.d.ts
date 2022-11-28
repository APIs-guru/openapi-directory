import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum {
    DefaultInclusive = "DEFAULT_INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}
export declare enum EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum {
    Unspecified = "UNSPECIFIED",
    Final = "FINAL",
    Retryable = "RETRYABLE",
    Canceled = "CANCELED"
}
export declare class EnterpriseCrmEventbusStatsDimensions extends SpeakeasyBase {
    clientId?: string;
    enumFilterType?: EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum;
    errorEnumString?: string;
    retryAttempt?: EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum;
    taskName?: string;
    taskNumber?: string;
    triggerId?: string;
    warningEnumString?: string;
    workflowId?: string;
    workflowName?: string;
}
