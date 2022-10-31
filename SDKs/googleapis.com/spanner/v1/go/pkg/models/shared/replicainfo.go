package shared




type ReplicaInfoTypeEnum string

const (
    ReplicaInfoTypeEnumTypeUnspecified ReplicaInfoTypeEnum = "TYPE_UNSPECIFIED"
ReplicaInfoTypeEnumReadWrite ReplicaInfoTypeEnum = "READ_WRITE"
ReplicaInfoTypeEnumReadOnly ReplicaInfoTypeEnum = "READ_ONLY"
ReplicaInfoTypeEnumWitness ReplicaInfoTypeEnum = "WITNESS"
)


type ReplicaInfo struct {
    DefaultLeaderLocation *bool `json:"defaultLeaderLocation,omitempty"`
    Location *string `json:"location,omitempty"`
    Type *ReplicaInfoTypeEnum `json:"type,omitempty"`
    
}

