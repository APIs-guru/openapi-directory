package shared



type GooglePrivacyDlpV2Location struct {
    ByteRange *GooglePrivacyDlpV2Range `json:"byteRange,omitempty"`
    CodepointRange *GooglePrivacyDlpV2Range `json:"codepointRange,omitempty"`
    Container *GooglePrivacyDlpV2Container `json:"container,omitempty"`
    ContentLocations []GooglePrivacyDlpV2ContentLocation `json:"contentLocations,omitempty"`
    
}

