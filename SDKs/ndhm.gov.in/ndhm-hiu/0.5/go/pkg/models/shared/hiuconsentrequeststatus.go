package shared

import (
"time")

type HiuConsentRequestStatusConsentRequest struct {
    ConsentArtefacts []ConsentArtefactReference `json:"consentArtefacts"`
    ID string `json:"id"`
    Status ConsentStatusEnum `json:"status"`
    
}

type HiuConsentRequestStatus struct {
    ConsentRequest *HiuConsentRequestStatusConsentRequest `json:"consentRequest,omitempty"`
    Error *Error `json:"error,omitempty"`
    RequestID string `json:"requestId"`
    Resp RequestReference `json:"resp"`
    Timestamp time.Time `json:"timestamp"`
    
}

