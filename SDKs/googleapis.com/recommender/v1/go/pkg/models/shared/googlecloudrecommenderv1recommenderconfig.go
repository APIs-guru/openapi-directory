package shared

// GoogleCloudRecommenderV1RecommenderConfig
// Configuration for a Recommender.
type GoogleCloudRecommenderV1RecommenderConfig struct {
	Annotations                 map[string]string                                    `json:"annotations,omitempty"`
	DisplayName                 *string                                              `json:"displayName,omitempty"`
	Etag                        *string                                              `json:"etag,omitempty"`
	Name                        *string                                              `json:"name,omitempty"`
	RecommenderGenerationConfig *GoogleCloudRecommenderV1RecommenderGenerationConfig `json:"recommenderGenerationConfig,omitempty"`
	RevisionID                  *string                                              `json:"revisionId,omitempty"`
	UpdateTime                  *string                                              `json:"updateTime,omitempty"`
}

// GoogleCloudRecommenderV1RecommenderConfigInput
// Configuration for a Recommender.
type GoogleCloudRecommenderV1RecommenderConfigInput struct {
	Annotations                 map[string]string                                    `json:"annotations,omitempty"`
	DisplayName                 *string                                              `json:"displayName,omitempty"`
	Etag                        *string                                              `json:"etag,omitempty"`
	Name                        *string                                              `json:"name,omitempty"`
	RecommenderGenerationConfig *GoogleCloudRecommenderV1RecommenderGenerationConfig `json:"recommenderGenerationConfig,omitempty"`
	UpdateTime                  *string                                              `json:"updateTime,omitempty"`
}
