import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=database_hold_time_h" })
  databaseHoldTimeH?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=populate_events" })
  populateEvents?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target_delivery_last_failure" })
  targetDeliveryLastFailure?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=target_delivery_status" })
  targetDeliveryStatus?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=target_retry" })
  targetRetry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target_url" })
  targetUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=topic_filter" })
  topicFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verify_target_certificate" })
  verifyTargetCertificate?: boolean;
}


export class SubscriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=database_hold_time_h" })
  databaseHoldTimeH?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=populate_events" })
  populateEvents?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target_retry" })
  targetRetry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target_url" })
  targetUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=topic_filter" })
  topicFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=verify_target_certificate" })
  verifyTargetCertificate?: boolean;
}
