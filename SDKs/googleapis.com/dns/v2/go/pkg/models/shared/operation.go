package shared




type OperationStatusEnum string

const (
    OperationStatusEnumPending OperationStatusEnum = "PENDING"
OperationStatusEnumDone OperationStatusEnum = "DONE"
)


type Operation struct {
    DNSKeyContext *OperationDNSKeyContext `json:"dnsKeyContext,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Status *OperationStatusEnum `json:"status,omitempty"`
    Type *string `json:"type,omitempty"`
    User *string `json:"user,omitempty"`
    ZoneContext *OperationManagedZoneContext `json:"zoneContext,omitempty"`
    
}

