package shared



type GooglePrivacyDlpV2DeidentifyContentRequest struct {
    DeidentifyConfig *GooglePrivacyDlpV2DeidentifyConfig `json:"deidentifyConfig,omitempty"`
    DeidentifyTemplateName *string `json:"deidentifyTemplateName,omitempty"`
    InspectConfig *GooglePrivacyDlpV2InspectConfig `json:"inspectConfig,omitempty"`
    InspectTemplateName *string `json:"inspectTemplateName,omitempty"`
    Item *GooglePrivacyDlpV2ContentItem `json:"item,omitempty"`
    LocationID *string `json:"locationId,omitempty"`
    
}

