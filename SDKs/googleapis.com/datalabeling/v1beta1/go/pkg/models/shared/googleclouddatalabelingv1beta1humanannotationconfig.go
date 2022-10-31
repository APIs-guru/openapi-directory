package shared



type GoogleCloudDatalabelingV1beta1HumanAnnotationConfig struct {
    AnnotatedDatasetDescription *string `json:"annotatedDatasetDescription,omitempty"`
    AnnotatedDatasetDisplayName *string `json:"annotatedDatasetDisplayName,omitempty"`
    ContributorEmails []string `json:"contributorEmails,omitempty"`
    Instruction *string `json:"instruction,omitempty"`
    LabelGroup *string `json:"labelGroup,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    QuestionDuration *string `json:"questionDuration,omitempty"`
    ReplicaCount *int32 `json:"replicaCount,omitempty"`
    UserEmailAddress *string `json:"userEmailAddress,omitempty"`
    
}

