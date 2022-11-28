package shared

type ConsentStateEnum string

const (
	ConsentStateEnumStateUnspecified ConsentStateEnum = "STATE_UNSPECIFIED"
	ConsentStateEnumActive           ConsentStateEnum = "ACTIVE"
	ConsentStateEnumArchived         ConsentStateEnum = "ARCHIVED"
	ConsentStateEnumRevoked          ConsentStateEnum = "REVOKED"
	ConsentStateEnumDraft            ConsentStateEnum = "DRAFT"
	ConsentStateEnumRejected         ConsentStateEnum = "REJECTED"
)

// Consent
// Represents a user's consent.
type Consent struct {
	ConsentArtifact    *string                                     `json:"consentArtifact,omitempty"`
	ExpireTime         *string                                     `json:"expireTime,omitempty"`
	Metadata           map[string]string                           `json:"metadata,omitempty"`
	Name               *string                                     `json:"name,omitempty"`
	Policies           []GoogleCloudHealthcareV1beta1ConsentPolicy `json:"policies,omitempty"`
	RevisionCreateTime *string                                     `json:"revisionCreateTime,omitempty"`
	RevisionID         *string                                     `json:"revisionId,omitempty"`
	State              *ConsentStateEnum                           `json:"state,omitempty"`
	TTL                *string                                     `json:"ttl,omitempty"`
	UserID             *string                                     `json:"userId,omitempty"`
}

// ConsentInput
// Represents a user's consent.
type ConsentInput struct {
	ConsentArtifact *string                                     `json:"consentArtifact,omitempty"`
	ExpireTime      *string                                     `json:"expireTime,omitempty"`
	Metadata        map[string]string                           `json:"metadata,omitempty"`
	Name            *string                                     `json:"name,omitempty"`
	Policies        []GoogleCloudHealthcareV1beta1ConsentPolicy `json:"policies,omitempty"`
	State           *ConsentStateEnum                           `json:"state,omitempty"`
	TTL             *string                                     `json:"ttl,omitempty"`
	UserID          *string                                     `json:"userId,omitempty"`
}
