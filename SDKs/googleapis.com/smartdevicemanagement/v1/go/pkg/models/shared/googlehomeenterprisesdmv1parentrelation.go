package shared

// GoogleHomeEnterpriseSdmV1ParentRelation
// Represents device relationships, for instance, structure/room to which the device is assigned to.
type GoogleHomeEnterpriseSdmV1ParentRelation struct {
	DisplayName *string `json:"displayName,omitempty"`
	Parent      *string `json:"parent,omitempty"`
}
