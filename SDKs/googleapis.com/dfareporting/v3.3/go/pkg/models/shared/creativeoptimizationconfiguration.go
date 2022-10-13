package shared

type CreativeOptimizationConfigurationOptimizationModelEnum string

const (
	CreativeOptimizationConfigurationOptimizationModelEnumClick                  CreativeOptimizationConfigurationOptimizationModelEnum = "CLICK"
	CreativeOptimizationConfigurationOptimizationModelEnumPostClick              CreativeOptimizationConfigurationOptimizationModelEnum = "POST_CLICK"
	CreativeOptimizationConfigurationOptimizationModelEnumPostImpression         CreativeOptimizationConfigurationOptimizationModelEnum = "POST_IMPRESSION"
	CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression CreativeOptimizationConfigurationOptimizationModelEnum = "POST_CLICK_AND_IMPRESSION"
	CreativeOptimizationConfigurationOptimizationModelEnumVideoCompletion        CreativeOptimizationConfigurationOptimizationModelEnum = "VIDEO_COMPLETION"
)

type CreativeOptimizationConfiguration struct {
	ID                    *string                                                 `json:"id"`
	Name                  *string                                                 `json:"name"`
	OptimizationActivitys []OptimizationActivity                                  `json:"optimizationActivitys"`
	OptimizationModel     *CreativeOptimizationConfigurationOptimizationModelEnum `json:"optimizationModel"`
}
