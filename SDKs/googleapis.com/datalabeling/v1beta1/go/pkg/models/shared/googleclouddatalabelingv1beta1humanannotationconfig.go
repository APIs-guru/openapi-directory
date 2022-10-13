package shared

type GoogleCloudDatalabelingV1beta1HumanAnnotationConfig struct {
	AnnotatedDatasetDescription *string  `json:"annotatedDatasetDescription"`
	AnnotatedDatasetDisplayName *string  `json:"annotatedDatasetDisplayName"`
	ContributorEmails           []string `json:"contributorEmails"`
	Instruction                 *string  `json:"instruction"`
	LabelGroup                  *string  `json:"labelGroup"`
	LanguageCode                *string  `json:"languageCode"`
	QuestionDuration            *string  `json:"questionDuration"`
	ReplicaCount                *int32   `json:"replicaCount"`
	UserEmailAddress            *string  `json:"userEmailAddress"`
}
