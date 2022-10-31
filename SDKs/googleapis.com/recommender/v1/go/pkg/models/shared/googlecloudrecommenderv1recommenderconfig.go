package shared



type GoogleCloudRecommenderV1RecommenderConfig struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Name *string `json:"name,omitempty"`
    RecommenderGenerationConfig *GoogleCloudRecommenderV1RecommenderGenerationConfig `json:"recommenderGenerationConfig,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

