package shared



type GoogleCloudDialogflowCxV3QueryInput struct {
    Audio *GoogleCloudDialogflowCxV3AudioInput `json:"audio,omitempty"`
    Dtmf *GoogleCloudDialogflowCxV3DtmfInput `json:"dtmf,omitempty"`
    Event *GoogleCloudDialogflowCxV3EventInput `json:"event,omitempty"`
    Intent *GoogleCloudDialogflowCxV3IntentInput `json:"intent,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    Text *GoogleCloudDialogflowCxV3TextInput `json:"text,omitempty"`
    
}

