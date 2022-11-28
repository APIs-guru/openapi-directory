package shared

type GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum string

const (
	GoogleCloudDialogflowV2FulfillmentFeatureTypeEnumTypeUnspecified GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2FulfillmentFeatureTypeEnumSmalltalk       GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum = "SMALLTALK"
)

// GoogleCloudDialogflowV2FulfillmentFeature
// Whether fulfillment is enabled for the specific feature.
type GoogleCloudDialogflowV2FulfillmentFeature struct {
	Type *GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum `json:"type,omitempty"`
}
