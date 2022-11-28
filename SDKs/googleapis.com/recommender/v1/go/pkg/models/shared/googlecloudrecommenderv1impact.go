package shared

type GoogleCloudRecommenderV1ImpactCategoryEnum string

const (
	GoogleCloudRecommenderV1ImpactCategoryEnumCategoryUnspecified GoogleCloudRecommenderV1ImpactCategoryEnum = "CATEGORY_UNSPECIFIED"
	GoogleCloudRecommenderV1ImpactCategoryEnumCost                GoogleCloudRecommenderV1ImpactCategoryEnum = "COST"
	GoogleCloudRecommenderV1ImpactCategoryEnumSecurity            GoogleCloudRecommenderV1ImpactCategoryEnum = "SECURITY"
	GoogleCloudRecommenderV1ImpactCategoryEnumPerformance         GoogleCloudRecommenderV1ImpactCategoryEnum = "PERFORMANCE"
	GoogleCloudRecommenderV1ImpactCategoryEnumManageability       GoogleCloudRecommenderV1ImpactCategoryEnum = "MANAGEABILITY"
	GoogleCloudRecommenderV1ImpactCategoryEnumSustainability      GoogleCloudRecommenderV1ImpactCategoryEnum = "SUSTAINABILITY"
	GoogleCloudRecommenderV1ImpactCategoryEnumReliability         GoogleCloudRecommenderV1ImpactCategoryEnum = "RELIABILITY"
)

// GoogleCloudRecommenderV1Impact
// Contains the impact a recommendation can have for a given category.
type GoogleCloudRecommenderV1Impact struct {
	Category                 *GoogleCloudRecommenderV1ImpactCategoryEnum       `json:"category,omitempty"`
	CostProjection           *GoogleCloudRecommenderV1CostProjection           `json:"costProjection,omitempty"`
	ReliabilityProjection    *GoogleCloudRecommenderV1ReliabilityProjection    `json:"reliabilityProjection,omitempty"`
	SecurityProjection       *GoogleCloudRecommenderV1SecurityProjection       `json:"securityProjection,omitempty"`
	SustainabilityProjection *GoogleCloudRecommenderV1SustainabilityProjection `json:"sustainabilityProjection,omitempty"`
}
