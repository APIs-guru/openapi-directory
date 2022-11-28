import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum {
    DefaultInclusive = "DEFAULT_INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}

export enum EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum {
    Unspecified = "UNSPECIFIED",
    Final = "FINAL",
    Retryable = "RETRYABLE",
    Canceled = "CANCELED"
}


export class EnterpriseCrmEventbusStatsDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=enumFilterType" })
  enumFilterType?: EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorEnumString" })
  errorEnumString?: string;

  @SpeakeasyMetadata({ data: "json, name=retryAttempt" })
  retryAttempt?: EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum;

  @SpeakeasyMetadata({ data: "json, name=taskName" })
  taskName?: string;

  @SpeakeasyMetadata({ data: "json, name=taskNumber" })
  taskNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @SpeakeasyMetadata({ data: "json, name=warningEnumString" })
  warningEnumString?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowName" })
  workflowName?: string;
}
