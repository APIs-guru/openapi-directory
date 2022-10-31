package shared

type GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum string

const (
	GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnumRestrictionUnspecified         GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum = "RESTRICTION_UNSPECIFIED"
	GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnumNoRestriction                  GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum = "NO_RESTRICTION"
	GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnumUniqueServingConfigRestriction GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum = "UNIQUE_SERVING_CONFIG_RESTRICTION"
	GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnumUniqueModelRestriction         GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum = "UNIQUE_MODEL_RESTRICTION"
	GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnumUniqueModelTypeRestriction     GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum = "UNIQUE_MODEL_TYPE_RESTRICTION"
)

type GoogleCloudRetailV2alphaModelPageOptimizationConfig struct {
	PageOptimizationEventType *string                                                             `json:"pageOptimizationEventType,omitempty"`
	Panels                    []GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel          `json:"panels,omitempty"`
	Restriction               *GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum `json:"restriction,omitempty"`
}
