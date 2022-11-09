import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum {
    DefaultInclusive = "DEFAULT_INCLUSIVE"
,    Exclusive = "EXCLUSIVE"
}

export enum EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum {
    Unspecified = "UNSPECIFIED"
,    Final = "FINAL"
,    Retryable = "RETRYABLE"
,    Canceled = "CANCELED"
}


export class EnterpriseCrmEventbusStatsDimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=enumFilterType" })
  enumFilterType?: EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum;

  @Metadata({ data: "json, name=errorEnumString" })
  errorEnumString?: string;

  @Metadata({ data: "json, name=retryAttempt" })
  retryAttempt?: EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum;

  @Metadata({ data: "json, name=taskName" })
  taskName?: string;

  @Metadata({ data: "json, name=taskNumber" })
  taskNumber?: string;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @Metadata({ data: "json, name=warningEnumString" })
  warningEnumString?: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId?: string;

  @Metadata({ data: "json, name=workflowName" })
  workflowName?: string;
}
