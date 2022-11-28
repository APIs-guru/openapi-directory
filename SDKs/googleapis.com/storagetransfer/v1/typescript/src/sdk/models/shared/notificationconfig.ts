import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NotificationConfigEventTypesEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    TransferOperationSuccess = "TRANSFER_OPERATION_SUCCESS",
    TransferOperationFailed = "TRANSFER_OPERATION_FAILED",
    TransferOperationAborted = "TRANSFER_OPERATION_ABORTED"
}

export enum NotificationConfigPayloadFormatEnum {
    PayloadFormatUnspecified = "PAYLOAD_FORMAT_UNSPECIFIED",
    None = "NONE",
    Json = "JSON"
}


// NotificationConfig
/** 
 * Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.
**/
export class NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTypes" })
  eventTypes?: NotificationConfigEventTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=payloadFormat" })
  payloadFormat?: NotificationConfigPayloadFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;
}
