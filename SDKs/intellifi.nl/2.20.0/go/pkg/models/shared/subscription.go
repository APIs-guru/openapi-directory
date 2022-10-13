package shared

type Subscription struct {
	Custom                    *interface{}           `json:"custom"`
	DatabaseHoldTimeH         *int64                 `json:"database_hold_time_h"`
	Description               *string                `json:"description"`
	EventsURL                 *string                `json:"events_url"`
	ID                        *string                `json:"id"`
	PopulateEvents            *bool                  `json:"populate_events"`
	TargetDeliveryLastFailure map[string]interface{} `json:"target_delivery_last_failure"`
	TargetDeliveryStatus      map[string]interface{} `json:"target_delivery_status"`
	TargetRetry               *bool                  `json:"target_retry"`
	TargetURL                 *string                `json:"target_url"`
	TimeCreated               *string                `json:"time_created"`
	TimeUpdated               *string                `json:"time_updated"`
	TopicFilter               *string                `json:"topic_filter"`
	URL                       *string                `json:"url"`
	VerifyTargetCertificate   *bool                  `json:"verify_target_certificate"`
}
