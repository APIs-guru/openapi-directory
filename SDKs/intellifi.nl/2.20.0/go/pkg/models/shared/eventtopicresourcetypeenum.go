package shared

type EventTopicResourceTypeEnum string

const (
	EventTopicResourceTypeEnumBlobs         EventTopicResourceTypeEnum = "blobs"
	EventTopicResourceTypeEnumItems         EventTopicResourceTypeEnum = "items"
	EventTopicResourceTypeEnumKeys          EventTopicResourceTypeEnum = "keys"
	EventTopicResourceTypeEnumKvpairs       EventTopicResourceTypeEnum = "kvpairs"
	EventTopicResourceTypeEnumLocations     EventTopicResourceTypeEnum = "locations"
	EventTopicResourceTypeEnumPresences     EventTopicResourceTypeEnum = "presences"
	EventTopicResourceTypeEnumServices      EventTopicResourceTypeEnum = "services"
	EventTopicResourceTypeEnumSpots         EventTopicResourceTypeEnum = "spots"
	EventTopicResourceTypeEnumSubscriptions EventTopicResourceTypeEnum = "subscriptions"
	EventTopicResourceTypeEnumUsers         EventTopicResourceTypeEnum = "users"
)
