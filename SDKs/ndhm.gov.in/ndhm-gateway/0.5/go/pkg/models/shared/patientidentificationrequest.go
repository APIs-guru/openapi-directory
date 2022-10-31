package shared

import (
"time")

type PatientIdentificationRequestQueryPatient struct {
    ID *string `json:"id,omitempty"`
    
}


type PatientIdentificationRequestQueryRequesterTypeEnum string

const (
    PatientIdentificationRequestQueryRequesterTypeEnumHiu PatientIdentificationRequestQueryRequesterTypeEnum = "HIU"
PatientIdentificationRequestQueryRequesterTypeEnumHip PatientIdentificationRequestQueryRequesterTypeEnum = "HIP"
)


type PatientIdentificationRequestQueryRequester struct {
    ID *string `json:"id,omitempty"`
    Type *PatientIdentificationRequestQueryRequesterTypeEnum `json:"type,omitempty"`
    
}

type PatientIdentificationRequestQuery struct {
    Patient PatientIdentificationRequestQueryPatient `json:"patient"`
    Requester PatientIdentificationRequestQueryRequester `json:"requester"`
    
}

type PatientIdentificationRequest struct {
    Query PatientIdentificationRequestQuery `json:"query"`
    RequestID string `json:"requestId"`
    Timestamp time.Time `json:"timestamp"`
    
}

