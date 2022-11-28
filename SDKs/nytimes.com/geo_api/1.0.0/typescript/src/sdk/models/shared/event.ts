import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=critic_name" })
  criticName?: string;

  @SpeakeasyMetadata({ data: "json, name=event_detail_url" })
  eventDetailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=event_id" })
  eventId?: number;

  @SpeakeasyMetadata({ data: "json, name=event_name" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "json, name=event_schedule_id" })
  eventScheduleId?: number;

  @SpeakeasyMetadata({ data: "json, name=festival" })
  festival?: boolean;

  @SpeakeasyMetadata({ data: "json, name=film_rating" })
  filmRating?: boolean;

  @SpeakeasyMetadata({ data: "json, name=free" })
  free?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kid_friendly" })
  kidFriendly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_chance" })
  lastChance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=long_running_show" })
  longRunningShow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=previews_and_openings" })
  previewsAndOpenings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recur_days" })
  recurDays?: string[];

  @SpeakeasyMetadata({ data: "json, name=recurring_start_date" })
  recurringStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=times_pick" })
  timesPick?: boolean;

  @SpeakeasyMetadata({ data: "json, name=web_description" })
  webDescription?: string;
}
