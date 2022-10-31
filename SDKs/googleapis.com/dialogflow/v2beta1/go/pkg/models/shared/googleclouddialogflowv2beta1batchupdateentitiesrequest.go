package shared



type GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest struct {
    Entities []GoogleCloudDialogflowV2beta1EntityTypeEntity `json:"entities,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

