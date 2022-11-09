import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom" })
  custom?: any;

  @Metadata({ data: "json, name=database_hold_time_h" })
  databaseHoldTimeH?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=populate_events" })
  populateEvents?: boolean;

  @Metadata({ data: "json, name=target_delivery_last_failure" })
  targetDeliveryLastFailure?: Map<string, any>;

  @Metadata({ data: "json, name=target_delivery_status" })
  targetDeliveryStatus?: Map<string, any>;

  @Metadata({ data: "json, name=target_retry" })
  targetRetry?: boolean;

  @Metadata({ data: "json, name=target_url" })
  targetUrl?: string;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=topic_filter" })
  topicFilter?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=verify_target_certificate" })
  verifyTargetCertificate?: boolean;
}
