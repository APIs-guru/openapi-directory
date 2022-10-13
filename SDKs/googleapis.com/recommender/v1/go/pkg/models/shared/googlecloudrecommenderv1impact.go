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

type GoogleCloudRecommenderV1Impact struct {
	Category                 *GoogleCloudRecommenderV1ImpactCategoryEnum       `json:"category"`
	CostProjection           *GoogleCloudRecommenderV1CostProjection           `json:"costProjection"`
	ReliabilityProjection    *GoogleCloudRecommenderV1ReliabilityProjection    `json:"reliabilityProjection"`
	SecurityProjection       *GoogleCloudRecommenderV1SecurityProjection       `json:"securityProjection"`
	SustainabilityProjection *GoogleCloudRecommenderV1SustainabilityProjection `json:"sustainabilityProjection"`
}
