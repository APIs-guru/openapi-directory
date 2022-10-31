package shared

type Capacity struct {
	PublishMibPerSec   *int32 `json:"publishMibPerSec,omitempty"`
	SubscribeMibPerSec *int32 `json:"subscribeMibPerSec,omitempty"`
}
