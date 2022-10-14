package shared

type Subscription struct {
	Custom                    *interface{}           `json:"custom,omitempty"`
	DatabaseHoldTimeH         *int64                 `json:"database_hold_time_h,omitempty"`
	Description               *string                `json:"description,omitempty"`
	EventsURL                 *string                `json:"events_url,omitempty"`
	ID                        *string                `json:"id,omitempty"`
	PopulateEvents            *bool                  `json:"populate_events,omitempty"`
	TargetDeliveryLastFailure map[string]interface{} `json:"target_delivery_last_failure,omitempty"`
	TargetDeliveryStatus      map[string]interface{} `json:"target_delivery_status,omitempty"`
	TargetRetry               *bool                  `json:"target_retry,omitempty"`
	TargetURL                 *string                `json:"target_url,omitempty"`
	TimeCreated               *string                `json:"time_created,omitempty"`
	TimeUpdated               *string                `json:"time_updated,omitempty"`
	TopicFilter               *string                `json:"topic_filter,omitempty"`
	URL                       *string                `json:"url,omitempty"`
	VerifyTargetCertificate   *bool                  `json:"verify_target_certificate,omitempty"`
}
