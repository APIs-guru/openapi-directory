package shared




type EventTopicActionEnum string

const (
    EventTopicActionEnumCreated EventTopicActionEnum = "created"
EventTopicActionEnumUpdated EventTopicActionEnum = "updated"
EventTopicActionEnumDeleted EventTopicActionEnum = "deleted"
EventTopicActionEnumDisappeared EventTopicActionEnum = "disappeared"
EventTopicActionEnumConnectionRssiChanged EventTopicActionEnum = "connection-rssi-changed"
)


