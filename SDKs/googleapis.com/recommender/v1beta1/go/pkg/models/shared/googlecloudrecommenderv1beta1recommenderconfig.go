package shared

// GoogleCloudRecommenderV1beta1RecommenderConfig
// Configuration for a Recommender.
type GoogleCloudRecommenderV1beta1RecommenderConfig struct {
	Annotations                 map[string]string                                         `json:"annotations,omitempty"`
	DisplayName                 *string                                                   `json:"displayName,omitempty"`
	Etag                        *string                                                   `json:"etag,omitempty"`
	Name                        *string                                                   `json:"name,omitempty"`
	RecommenderGenerationConfig *GoogleCloudRecommenderV1beta1RecommenderGenerationConfig `json:"recommenderGenerationConfig,omitempty"`
	RevisionID                  *string                                                   `json:"revisionId,omitempty"`
	UpdateTime                  *string                                                   `json:"updateTime,omitempty"`
}

// GoogleCloudRecommenderV1beta1RecommenderConfigInput
// Configuration for a Recommender.
type GoogleCloudRecommenderV1beta1RecommenderConfigInput struct {
	Annotations                 map[string]string                                         `json:"annotations,omitempty"`
	DisplayName                 *string                                                   `json:"displayName,omitempty"`
	Etag                        *string                                                   `json:"etag,omitempty"`
	Name                        *string                                                   `json:"name,omitempty"`
	RecommenderGenerationConfig *GoogleCloudRecommenderV1beta1RecommenderGenerationConfig `json:"recommenderGenerationConfig,omitempty"`
	UpdateTime                  *string                                                   `json:"updateTime,omitempty"`
}
