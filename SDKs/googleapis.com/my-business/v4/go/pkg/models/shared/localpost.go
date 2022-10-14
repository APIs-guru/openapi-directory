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
	AlertType    *LocalPostAlertTypeEnum `json:"alertType,omitempty"`
	CallToAction *CallToAction           `json:"callToAction,omitempty"`
	CreateTime   *string                 `json:"createTime,omitempty"`
	Event        *LocalPostEvent         `json:"event,omitempty"`
	LanguageCode *string                 `json:"languageCode,omitempty"`
	Media        []MediaItem             `json:"media,omitempty"`
	Name         *string                 `json:"name,omitempty"`
	Offer        *LocalPostOffer         `json:"offer,omitempty"`
	SearchURL    *string                 `json:"searchUrl,omitempty"`
	State        *LocalPostStateEnum     `json:"state,omitempty"`
	Summary      *string                 `json:"summary,omitempty"`
	TopicType    *LocalPostTopicTypeEnum `json:"topicType,omitempty"`
	UpdateTime   *string                 `json:"updateTime,omitempty"`
}
