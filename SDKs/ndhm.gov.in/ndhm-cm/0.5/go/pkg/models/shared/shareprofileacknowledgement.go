package shared




type ShareProfileAcknowledgementStatusEnum string

const (
    ShareProfileAcknowledgementStatusEnumSuccess ShareProfileAcknowledgementStatusEnum = "SUCCESS"
ShareProfileAcknowledgementStatusEnumFailure ShareProfileAcknowledgementStatusEnum = "FAILURE"
)


type ShareProfileAcknowledgement struct {
    HealthID string `json:"healthId"`
    Status ShareProfileAcknowledgementStatusEnum `json:"status"`
    
}

