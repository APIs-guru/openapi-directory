package shared

type FieldTypeDefinitionFieldTypeEnum string

const (
	FieldTypeDefinitionFieldTypeEnumBooleancheckbox     FieldTypeDefinitionFieldTypeEnum = "booleancheckbox"
	FieldTypeDefinitionFieldTypeEnumCheckbox            FieldTypeDefinitionFieldTypeEnum = "checkbox"
	FieldTypeDefinitionFieldTypeEnumDate                FieldTypeDefinitionFieldTypeEnum = "date"
	FieldTypeDefinitionFieldTypeEnumFile                FieldTypeDefinitionFieldTypeEnum = "file"
	FieldTypeDefinitionFieldTypeEnumNumber              FieldTypeDefinitionFieldTypeEnum = "number"
	FieldTypeDefinitionFieldTypeEnumPhonenumber         FieldTypeDefinitionFieldTypeEnum = "phonenumber"
	FieldTypeDefinitionFieldTypeEnumRadio               FieldTypeDefinitionFieldTypeEnum = "radio"
	FieldTypeDefinitionFieldTypeEnumSelect              FieldTypeDefinitionFieldTypeEnum = "select"
	FieldTypeDefinitionFieldTypeEnumText                FieldTypeDefinitionFieldTypeEnum = "text"
	FieldTypeDefinitionFieldTypeEnumTextarea            FieldTypeDefinitionFieldTypeEnum = "textarea"
	FieldTypeDefinitionFieldTypeEnumCalculationEquation FieldTypeDefinitionFieldTypeEnum = "calculation_equation"
	FieldTypeDefinitionFieldTypeEnumCalculationRollup   FieldTypeDefinitionFieldTypeEnum = "calculation_rollup"
	FieldTypeDefinitionFieldTypeEnumCalculationScore    FieldTypeDefinitionFieldTypeEnum = "calculation_score"
	FieldTypeDefinitionFieldTypeEnumCalculationReadTime FieldTypeDefinitionFieldTypeEnum = "calculation_read_time"
	FieldTypeDefinitionFieldTypeEnumUnknown             FieldTypeDefinitionFieldTypeEnum = "unknown"
)

type FieldTypeDefinitionReferencedObjectTypeEnum string

const (
	FieldTypeDefinitionReferencedObjectTypeEnumContact                  FieldTypeDefinitionReferencedObjectTypeEnum = "CONTACT"
	FieldTypeDefinitionReferencedObjectTypeEnumCompany                  FieldTypeDefinitionReferencedObjectTypeEnum = "COMPANY"
	FieldTypeDefinitionReferencedObjectTypeEnumDeal                     FieldTypeDefinitionReferencedObjectTypeEnum = "DEAL"
	FieldTypeDefinitionReferencedObjectTypeEnumEngagement               FieldTypeDefinitionReferencedObjectTypeEnum = "ENGAGEMENT"
	FieldTypeDefinitionReferencedObjectTypeEnumTicket                   FieldTypeDefinitionReferencedObjectTypeEnum = "TICKET"
	FieldTypeDefinitionReferencedObjectTypeEnumOwner                    FieldTypeDefinitionReferencedObjectTypeEnum = "OWNER"
	FieldTypeDefinitionReferencedObjectTypeEnumProduct                  FieldTypeDefinitionReferencedObjectTypeEnum = "PRODUCT"
	FieldTypeDefinitionReferencedObjectTypeEnumLineItem                 FieldTypeDefinitionReferencedObjectTypeEnum = "LINE_ITEM"
	FieldTypeDefinitionReferencedObjectTypeEnumBetDeliverableService    FieldTypeDefinitionReferencedObjectTypeEnum = "BET_DELIVERABLE_SERVICE"
	FieldTypeDefinitionReferencedObjectTypeEnumContent                  FieldTypeDefinitionReferencedObjectTypeEnum = "CONTENT"
	FieldTypeDefinitionReferencedObjectTypeEnumConversation             FieldTypeDefinitionReferencedObjectTypeEnum = "CONVERSATION"
	FieldTypeDefinitionReferencedObjectTypeEnumBetAlert                 FieldTypeDefinitionReferencedObjectTypeEnum = "BET_ALERT"
	FieldTypeDefinitionReferencedObjectTypeEnumPortal                   FieldTypeDefinitionReferencedObjectTypeEnum = "PORTAL"
	FieldTypeDefinitionReferencedObjectTypeEnumQuote                    FieldTypeDefinitionReferencedObjectTypeEnum = "QUOTE"
	FieldTypeDefinitionReferencedObjectTypeEnumFormSubmissionInbounddb  FieldTypeDefinitionReferencedObjectTypeEnum = "FORM_SUBMISSION_INBOUNDDB"
	FieldTypeDefinitionReferencedObjectTypeEnumQuota                    FieldTypeDefinitionReferencedObjectTypeEnum = "QUOTA"
	FieldTypeDefinitionReferencedObjectTypeEnumUnsubscribe              FieldTypeDefinitionReferencedObjectTypeEnum = "UNSUBSCRIBE"
	FieldTypeDefinitionReferencedObjectTypeEnumCommunication            FieldTypeDefinitionReferencedObjectTypeEnum = "COMMUNICATION"
	FieldTypeDefinitionReferencedObjectTypeEnumFeedbackSubmission       FieldTypeDefinitionReferencedObjectTypeEnum = "FEEDBACK_SUBMISSION"
	FieldTypeDefinitionReferencedObjectTypeEnumAttribution              FieldTypeDefinitionReferencedObjectTypeEnum = "ATTRIBUTION"
	FieldTypeDefinitionReferencedObjectTypeEnumSalesforceSyncError      FieldTypeDefinitionReferencedObjectTypeEnum = "SALESFORCE_SYNC_ERROR"
	FieldTypeDefinitionReferencedObjectTypeEnumRestorableCrmObject      FieldTypeDefinitionReferencedObjectTypeEnum = "RESTORABLE_CRM_OBJECT"
	FieldTypeDefinitionReferencedObjectTypeEnumHub                      FieldTypeDefinitionReferencedObjectTypeEnum = "HUB"
	FieldTypeDefinitionReferencedObjectTypeEnumLandingPage              FieldTypeDefinitionReferencedObjectTypeEnum = "LANDING_PAGE"
	FieldTypeDefinitionReferencedObjectTypeEnumProductOrFolder          FieldTypeDefinitionReferencedObjectTypeEnum = "PRODUCT_OR_FOLDER"
	FieldTypeDefinitionReferencedObjectTypeEnumTask                     FieldTypeDefinitionReferencedObjectTypeEnum = "TASK"
	FieldTypeDefinitionReferencedObjectTypeEnumForm                     FieldTypeDefinitionReferencedObjectTypeEnum = "FORM"
	FieldTypeDefinitionReferencedObjectTypeEnumMarketingEmail           FieldTypeDefinitionReferencedObjectTypeEnum = "MARKETING_EMAIL"
	FieldTypeDefinitionReferencedObjectTypeEnumAdAccount                FieldTypeDefinitionReferencedObjectTypeEnum = "AD_ACCOUNT"
	FieldTypeDefinitionReferencedObjectTypeEnumAdCampaign               FieldTypeDefinitionReferencedObjectTypeEnum = "AD_CAMPAIGN"
	FieldTypeDefinitionReferencedObjectTypeEnumAdGroup                  FieldTypeDefinitionReferencedObjectTypeEnum = "AD_GROUP"
	FieldTypeDefinitionReferencedObjectTypeEnumAd                       FieldTypeDefinitionReferencedObjectTypeEnum = "AD"
	FieldTypeDefinitionReferencedObjectTypeEnumKeyword                  FieldTypeDefinitionReferencedObjectTypeEnum = "KEYWORD"
	FieldTypeDefinitionReferencedObjectTypeEnumCampaign                 FieldTypeDefinitionReferencedObjectTypeEnum = "CAMPAIGN"
	FieldTypeDefinitionReferencedObjectTypeEnumSocialChannel            FieldTypeDefinitionReferencedObjectTypeEnum = "SOCIAL_CHANNEL"
	FieldTypeDefinitionReferencedObjectTypeEnumSocialPost               FieldTypeDefinitionReferencedObjectTypeEnum = "SOCIAL_POST"
	FieldTypeDefinitionReferencedObjectTypeEnumSitePage                 FieldTypeDefinitionReferencedObjectTypeEnum = "SITE_PAGE"
	FieldTypeDefinitionReferencedObjectTypeEnumBlogPost                 FieldTypeDefinitionReferencedObjectTypeEnum = "BLOG_POST"
	FieldTypeDefinitionReferencedObjectTypeEnumImport                   FieldTypeDefinitionReferencedObjectTypeEnum = "IMPORT"
	FieldTypeDefinitionReferencedObjectTypeEnumExport                   FieldTypeDefinitionReferencedObjectTypeEnum = "EXPORT"
	FieldTypeDefinitionReferencedObjectTypeEnumCta                      FieldTypeDefinitionReferencedObjectTypeEnum = "CTA"
	FieldTypeDefinitionReferencedObjectTypeEnumTaskTemplate             FieldTypeDefinitionReferencedObjectTypeEnum = "TASK_TEMPLATE"
	FieldTypeDefinitionReferencedObjectTypeEnumAutomationPlatformFlow   FieldTypeDefinitionReferencedObjectTypeEnum = "AUTOMATION_PLATFORM_FLOW"
	FieldTypeDefinitionReferencedObjectTypeEnumObjectList               FieldTypeDefinitionReferencedObjectTypeEnum = "OBJECT_LIST"
	FieldTypeDefinitionReferencedObjectTypeEnumNote                     FieldTypeDefinitionReferencedObjectTypeEnum = "NOTE"
	FieldTypeDefinitionReferencedObjectTypeEnumMeetingEvent             FieldTypeDefinitionReferencedObjectTypeEnum = "MEETING_EVENT"
	FieldTypeDefinitionReferencedObjectTypeEnumCall                     FieldTypeDefinitionReferencedObjectTypeEnum = "CALL"
	FieldTypeDefinitionReferencedObjectTypeEnumEmail                    FieldTypeDefinitionReferencedObjectTypeEnum = "EMAIL"
	FieldTypeDefinitionReferencedObjectTypeEnumPublishingTask           FieldTypeDefinitionReferencedObjectTypeEnum = "PUBLISHING_TASK"
	FieldTypeDefinitionReferencedObjectTypeEnumConversationSession      FieldTypeDefinitionReferencedObjectTypeEnum = "CONVERSATION_SESSION"
	FieldTypeDefinitionReferencedObjectTypeEnumContactCreateAttribution FieldTypeDefinitionReferencedObjectTypeEnum = "CONTACT_CREATE_ATTRIBUTION"
	FieldTypeDefinitionReferencedObjectTypeEnumInvoice                  FieldTypeDefinitionReferencedObjectTypeEnum = "INVOICE"
	FieldTypeDefinitionReferencedObjectTypeEnumMarketingEvent           FieldTypeDefinitionReferencedObjectTypeEnum = "MARKETING_EVENT"
	FieldTypeDefinitionReferencedObjectTypeEnumConversationInbox        FieldTypeDefinitionReferencedObjectTypeEnum = "CONVERSATION_INBOX"
	FieldTypeDefinitionReferencedObjectTypeEnumChatflow                 FieldTypeDefinitionReferencedObjectTypeEnum = "CHATFLOW"
	FieldTypeDefinitionReferencedObjectTypeEnumMediaBridge              FieldTypeDefinitionReferencedObjectTypeEnum = "MEDIA_BRIDGE"
	FieldTypeDefinitionReferencedObjectTypeEnumSequence                 FieldTypeDefinitionReferencedObjectTypeEnum = "SEQUENCE"
	FieldTypeDefinitionReferencedObjectTypeEnumSequenceStep             FieldTypeDefinitionReferencedObjectTypeEnum = "SEQUENCE_STEP"
	FieldTypeDefinitionReferencedObjectTypeEnumForecast                 FieldTypeDefinitionReferencedObjectTypeEnum = "FORECAST"
	FieldTypeDefinitionReferencedObjectTypeEnumSnippet                  FieldTypeDefinitionReferencedObjectTypeEnum = "SNIPPET"
	FieldTypeDefinitionReferencedObjectTypeEnumTemplate                 FieldTypeDefinitionReferencedObjectTypeEnum = "TEMPLATE"
	FieldTypeDefinitionReferencedObjectTypeEnumUnknown                  FieldTypeDefinitionReferencedObjectTypeEnum = "UNKNOWN"
)

type FieldTypeDefinitionTypeEnum string

const (
	FieldTypeDefinitionTypeEnumString            FieldTypeDefinitionTypeEnum = "string"
	FieldTypeDefinitionTypeEnumNumber            FieldTypeDefinitionTypeEnum = "number"
	FieldTypeDefinitionTypeEnumBool              FieldTypeDefinitionTypeEnum = "bool"
	FieldTypeDefinitionTypeEnumDatetime          FieldTypeDefinitionTypeEnum = "datetime"
	FieldTypeDefinitionTypeEnumEnumeration       FieldTypeDefinitionTypeEnum = "enumeration"
	FieldTypeDefinitionTypeEnumDate              FieldTypeDefinitionTypeEnum = "date"
	FieldTypeDefinitionTypeEnumPhoneNumber       FieldTypeDefinitionTypeEnum = "phone_number"
	FieldTypeDefinitionTypeEnumCurrencyNumber    FieldTypeDefinitionTypeEnum = "currency_number"
	FieldTypeDefinitionTypeEnumJSON              FieldTypeDefinitionTypeEnum = "json"
	FieldTypeDefinitionTypeEnumObjectCoordinates FieldTypeDefinitionTypeEnum = "object_coordinates"
)

type FieldTypeDefinition struct {
	FieldType            *FieldTypeDefinitionFieldTypeEnum            `json:"fieldType"`
	Name                 string                                       `json:"name"`
	Options              []Option                                     `json:"options"`
	OptionsURL           *string                                      `json:"optionsUrl"`
	ReferencedObjectType *FieldTypeDefinitionReferencedObjectTypeEnum `json:"referencedObjectType"`
	Type                 FieldTypeDefinitionTypeEnum                  `json:"type"`
}
