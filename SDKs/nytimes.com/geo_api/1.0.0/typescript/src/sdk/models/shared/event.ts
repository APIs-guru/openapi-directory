import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=critic_name" })
  criticName?: string;

  @Metadata({ data: "json, name=event_detail_url" })
  eventDetailUrl?: string;

  @Metadata({ data: "json, name=event_id" })
  eventId?: number;

  @Metadata({ data: "json, name=event_name" })
  eventName?: string;

  @Metadata({ data: "json, name=event_schedule_id" })
  eventScheduleId?: number;

  @Metadata({ data: "json, name=festival" })
  festival?: boolean;

  @Metadata({ data: "json, name=film_rating" })
  filmRating?: boolean;

  @Metadata({ data: "json, name=free" })
  free?: boolean;

  @Metadata({ data: "json, name=kid_friendly" })
  kidFriendly?: boolean;

  @Metadata({ data: "json, name=last_chance" })
  lastChance?: boolean;

  @Metadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @Metadata({ data: "json, name=long_running_show" })
  longRunningShow?: boolean;

  @Metadata({ data: "json, name=previews_and_openings" })
  previewsAndOpenings?: boolean;

  @Metadata({ data: "json, name=recur_days" })
  recurDays?: string[];

  @Metadata({ data: "json, name=recurring_start_date" })
  recurringStartDate?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=times_pick" })
  timesPick?: boolean;

  @Metadata({ data: "json, name=web_description" })
  webDescription?: string;
}
