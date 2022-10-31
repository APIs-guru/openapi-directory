package shared

type GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum string

const (
	GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum = "URL_TYPE_HINT_UNSPECIFIED"
	GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction              GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum = "AMP_ACTION"
	GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent             GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum = "AMP_CONTENT"
)

type GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction struct {
	URL         *string                                                                                                   `json:"url,omitempty"`
	URLTypeHint *GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum `json:"urlTypeHint,omitempty"`
}
