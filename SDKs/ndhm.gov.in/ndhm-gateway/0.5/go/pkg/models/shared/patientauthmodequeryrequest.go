package shared

import (
"time")


type PatientAuthModeQueryRequestQueryRequesterTypeEnum string

const (
    PatientAuthModeQueryRequestQueryRequesterTypeEnumHip PatientAuthModeQueryRequestQueryRequesterTypeEnum = "HIP"
PatientAuthModeQueryRequestQueryRequesterTypeEnumHiu PatientAuthModeQueryRequestQueryRequesterTypeEnum = "HIU"
)


type PatientAuthModeQueryRequestQueryRequester struct {
    ID string `json:"id"`
    Type PatientAuthModeQueryRequestQueryRequesterTypeEnum `json:"type"`
    
}

type PatientAuthModeQueryRequestQuery struct {
    ID string `json:"id"`
    Purpose PatientAuthPurposeEnum `json:"purpose"`
    Requester PatientAuthModeQueryRequestQueryRequester `json:"requester"`
    
}

type PatientAuthModeQueryRequest struct {
    Query PatientAuthModeQueryRequestQuery `json:"query"`
    RequestID string `json:"requestId"`
    Timestamp time.Time `json:"timestamp"`
    
}

