package shared

type Event struct {
	City                *string  `json:"city"`
	CriticName          *string  `json:"critic_name"`
	EventDetailURL      *string  `json:"event_detail_url"`
	EventID             *int64   `json:"event_id"`
	EventName           *string  `json:"event_name"`
	EventScheduleID     *int64   `json:"event_schedule_id"`
	Festival            *bool    `json:"festival"`
	FilmRating          *bool    `json:"film_rating"`
	Free                *bool    `json:"free"`
	KidFriendly         *bool    `json:"kid_friendly"`
	LastChance          *bool    `json:"last_chance"`
	LastModified        *string  `json:"last_modified"`
	LongRunningShow     *bool    `json:"long_running_show"`
	PreviewsAndOpenings *bool    `json:"previews_and_openings"`
	RecurDays           []string `json:"recur_days"`
	RecurringStartDate  *string  `json:"recurring_start_date"`
	State               *string  `json:"state"`
	TimesPick           *bool    `json:"times_pick"`
	WebDescription      *string  `json:"web_description"`
}
