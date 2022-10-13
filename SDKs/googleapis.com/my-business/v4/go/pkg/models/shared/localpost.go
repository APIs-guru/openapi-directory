package shared

type LocalPostAlertTypeEnum string

const (
	LocalPostAlertTypeEnumAlertTypeUnspecified LocalPostAlertTypeEnum = "ALERT_TYPE_UNSPECIFIED"
	LocalPostAlertTypeEnumCovid19              LocalPostAlertTypeEnum = "COVID_19"
)

type LocalPostStateEnum string

const (
	LocalPostStateEnumLocalPostStateUnspecified LocalPostStateEnum = "LOCAL_POST_STATE_UNSPECIFIED"
	LocalPostStateEnumRejected                  LocalPostStateEnum = "REJECTED"
	LocalPostStateEnumLive                      LocalPostStateEnum = "LIVE"
	LocalPostStateEnumProcessing                LocalPostStateEnum = "PROCESSING"
)

type LocalPostTopicTypeEnum string

const (
	LocalPostTopicTypeEnumLocalPostTopicTypeUnspecified LocalPostTopicTypeEnum = "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED"
	LocalPostTopicTypeEnumStandard                      LocalPostTopicTypeEnum = "STANDARD"
	LocalPostTopicTypeEnumEvent                         LocalPostTopicTypeEnum = "EVENT"
	LocalPostTopicTypeEnumOffer                         LocalPostTopicTypeEnum = "OFFER"
	LocalPostTopicTypeEnumAlert                         LocalPostTopicTypeEnum = "ALERT"
)

type LocalPost struct {
	AlertType    *LocalPostAlertTypeEnum `json:"alertType"`
	CallToAction *CallToAction           `json:"callToAction"`
	CreateTime   *string                 `json:"createTime"`
	Event        *LocalPostEvent         `json:"event"`
	LanguageCode *string                 `json:"languageCode"`
	Media        []MediaItem             `json:"media"`
	Name         *string                 `json:"name"`
	Offer        *LocalPostOffer         `json:"offer"`
	SearchURL    *string                 `json:"searchUrl"`
	State        *LocalPostStateEnum     `json:"state"`
	Summary      *string                 `json:"summary"`
	TopicType    *LocalPostTopicTypeEnum `json:"topicType"`
	UpdateTime   *string                 `json:"updateTime"`
}
