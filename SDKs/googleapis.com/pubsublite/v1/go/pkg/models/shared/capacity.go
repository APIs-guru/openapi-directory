package shared

type Capacity struct {
	PublishMibPerSec   *int32 `json:"publishMibPerSec"`
	SubscribeMibPerSec *int32 `json:"subscribeMibPerSec"`
}
