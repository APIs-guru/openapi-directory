package shared



type GooglePrivacyDlpV2ListInspectTemplatesResponse struct {
    InspectTemplates []GooglePrivacyDlpV2InspectTemplate `json:"inspectTemplates,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

