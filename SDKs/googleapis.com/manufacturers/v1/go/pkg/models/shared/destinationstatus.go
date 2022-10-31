package shared




type DestinationStatusStatusEnum string

const (
    DestinationStatusStatusEnumUnknown DestinationStatusStatusEnum = "UNKNOWN"
DestinationStatusStatusEnumActive DestinationStatusStatusEnum = "ACTIVE"
DestinationStatusStatusEnumPending DestinationStatusStatusEnum = "PENDING"
DestinationStatusStatusEnumDisapproved DestinationStatusStatusEnum = "DISAPPROVED"
)


type DestinationStatus struct {
    Destination *string `json:"destination,omitempty"`
    Status *DestinationStatusStatusEnum `json:"status,omitempty"`
    
}

