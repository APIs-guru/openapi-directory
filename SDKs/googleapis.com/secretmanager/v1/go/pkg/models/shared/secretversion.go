package shared

type SecretVersionStateEnum string

const (
	SecretVersionStateEnumStateUnspecified SecretVersionStateEnum = "STATE_UNSPECIFIED"
	SecretVersionStateEnumEnabled          SecretVersionStateEnum = "ENABLED"
	SecretVersionStateEnumDisabled         SecretVersionStateEnum = "DISABLED"
	SecretVersionStateEnumDestroyed        SecretVersionStateEnum = "DESTROYED"
)

// SecretVersion
// A secret version resource in the Secret Manager API.
type SecretVersion struct {
	ClientSpecifiedPayloadChecksum *bool                   `json:"clientSpecifiedPayloadChecksum,omitempty"`
	CreateTime                     *string                 `json:"createTime,omitempty"`
	DestroyTime                    *string                 `json:"destroyTime,omitempty"`
	Etag                           *string                 `json:"etag,omitempty"`
	Name                           *string                 `json:"name,omitempty"`
	ReplicationStatus              *ReplicationStatus      `json:"replicationStatus,omitempty"`
	State                          *SecretVersionStateEnum `json:"state,omitempty"`
}
