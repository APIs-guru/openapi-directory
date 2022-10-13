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

type Consent struct {
	ConsentArtifact    *string                                     `json:"consentArtifact"`
	ExpireTime         *string                                     `json:"expireTime"`
	Metadata           map[string]string                           `json:"metadata"`
	Name               *string                                     `json:"name"`
	Policies           []GoogleCloudHealthcareV1beta1ConsentPolicy `json:"policies"`
	RevisionCreateTime *string                                     `json:"revisionCreateTime"`
	RevisionID         *string                                     `json:"revisionId"`
	State              *ConsentStateEnum                           `json:"state"`
	TTL                *string                                     `json:"ttl"`
	UserID             *string                                     `json:"userId"`
}
