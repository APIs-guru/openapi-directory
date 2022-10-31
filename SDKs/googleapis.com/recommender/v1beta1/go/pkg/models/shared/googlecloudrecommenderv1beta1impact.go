package shared

type GoogleCloudRecommenderV1beta1ImpactCategoryEnum string

const (
	GoogleCloudRecommenderV1beta1ImpactCategoryEnumCategoryUnspecified GoogleCloudRecommenderV1beta1ImpactCategoryEnum = "CATEGORY_UNSPECIFIED"
	GoogleCloudRecommenderV1beta1ImpactCategoryEnumCost                GoogleCloudRecommenderV1beta1ImpactCategoryEnum = "COST"
	GoogleCloudRecommenderV1beta1ImpactCategoryEnumSecurity            GoogleCloudRecommenderV1beta1ImpactCategoryEnum = "SECURITY"
	GoogleCloudRecommenderV1beta1ImpactCategoryEnumPerformance         GoogleCloudRecommenderV1beta1ImpactCategoryEnum = "PERFORMANCE"
	GoogleCloudRecommenderV1beta1ImpactCategoryEnumManageability       GoogleCloudRecommenderV1beta1ImpactCategoryEnum = "MANAGEABILITY"
	GoogleCloudRecommenderV1beta1ImpactCategoryEnumSustainability      GoogleCloudRecommenderV1beta1ImpactCategoryEnum = "SUSTAINABILITY"
	GoogleCloudRecommenderV1beta1ImpactCategoryEnumReliability         GoogleCloudRecommenderV1beta1ImpactCategoryEnum = "RELIABILITY"
)

type GoogleCloudRecommenderV1beta1Impact struct {
	Category                 *GoogleCloudRecommenderV1beta1ImpactCategoryEnum       `json:"category,omitempty"`
	CostProjection           *GoogleCloudRecommenderV1beta1CostProjection           `json:"costProjection,omitempty"`
	ReliabilityProjection    *GoogleCloudRecommenderV1beta1ReliabilityProjection    `json:"reliabilityProjection,omitempty"`
	SecurityProjection       *GoogleCloudRecommenderV1beta1SecurityProjection       `json:"securityProjection,omitempty"`
	SustainabilityProjection *GoogleCloudRecommenderV1beta1SustainabilityProjection `json:"sustainabilityProjection,omitempty"`
}
