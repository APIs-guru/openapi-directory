package shared



type Event struct {
    City *string `json:"city,omitempty"`
    CriticName *string `json:"critic_name,omitempty"`
    EventDetailURL *string `json:"event_detail_url,omitempty"`
    EventID *int64 `json:"event_id,omitempty"`
    EventName *string `json:"event_name,omitempty"`
    EventScheduleID *int64 `json:"event_schedule_id,omitempty"`
    Festival *bool `json:"festival,omitempty"`
    FilmRating *bool `json:"film_rating,omitempty"`
    Free *bool `json:"free,omitempty"`
    KidFriendly *bool `json:"kid_friendly,omitempty"`
    LastChance *bool `json:"last_chance,omitempty"`
    LastModified *string `json:"last_modified,omitempty"`
    LongRunningShow *bool `json:"long_running_show,omitempty"`
    PreviewsAndOpenings *bool `json:"previews_and_openings,omitempty"`
    RecurDays []string `json:"recur_days,omitempty"`
    RecurringStartDate *string `json:"recurring_start_date,omitempty"`
    State *string `json:"state,omitempty"`
    TimesPick *bool `json:"times_pick,omitempty"`
    WebDescription *string `json:"web_description,omitempty"`
    
}

