package shared

type GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum string

const (
	GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnumTypeUnspecified GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnumSmalltalk       GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum = "SMALLTALK"
)

// GoogleCloudDialogflowV2beta1FulfillmentFeature
// Whether fulfillment is enabled for the specific feature.
type GoogleCloudDialogflowV2beta1FulfillmentFeature struct {
	Type *GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum `json:"type,omitempty"`
}
