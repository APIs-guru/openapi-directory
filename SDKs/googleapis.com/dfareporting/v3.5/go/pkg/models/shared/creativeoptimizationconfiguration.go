package shared

type CreativeOptimizationConfigurationOptimizationModelEnum string

const (
	CreativeOptimizationConfigurationOptimizationModelEnumClick                  CreativeOptimizationConfigurationOptimizationModelEnum = "CLICK"
	CreativeOptimizationConfigurationOptimizationModelEnumPostClick              CreativeOptimizationConfigurationOptimizationModelEnum = "POST_CLICK"
	CreativeOptimizationConfigurationOptimizationModelEnumPostImpression         CreativeOptimizationConfigurationOptimizationModelEnum = "POST_IMPRESSION"
	CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression CreativeOptimizationConfigurationOptimizationModelEnum = "POST_CLICK_AND_IMPRESSION"
	CreativeOptimizationConfigurationOptimizationModelEnumVideoCompletion        CreativeOptimizationConfigurationOptimizationModelEnum = "VIDEO_COMPLETION"
)

// CreativeOptimizationConfiguration
// Creative optimization settings.
type CreativeOptimizationConfiguration struct {
	ID                    *string                                                 `json:"id,omitempty"`
	Name                  *string                                                 `json:"name,omitempty"`
	OptimizationActivitys []OptimizationActivity                                  `json:"optimizationActivitys,omitempty"`
	OptimizationModel     *CreativeOptimizationConfigurationOptimizationModelEnum `json:"optimizationModel,omitempty"`
}
