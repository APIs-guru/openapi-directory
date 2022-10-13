package shared

type GoogleCloudRecommenderV1beta1RecommenderConfig struct {
	Annotations                 map[string]string                                         `json:"annotations"`
	DisplayName                 *string                                                   `json:"displayName"`
	Etag                        *string                                                   `json:"etag"`
	Name                        *string                                                   `json:"name"`
	RecommenderGenerationConfig *GoogleCloudRecommenderV1beta1RecommenderGenerationConfig `json:"recommenderGenerationConfig"`
	RevisionID                  *string                                                   `json:"revisionId"`
	UpdateTime                  *string                                                   `json:"updateTime"`
}
