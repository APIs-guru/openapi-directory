package shared

type Name struct {
	DisplayName             *string        `json:"displayName,omitempty"`
	DisplayNameLastFirst    *string        `json:"displayNameLastFirst,omitempty"`
	FamilyName              *string        `json:"familyName,omitempty"`
	GivenName               *string        `json:"givenName,omitempty"`
	HonorificPrefix         *string        `json:"honorificPrefix,omitempty"`
	HonorificSuffix         *string        `json:"honorificSuffix,omitempty"`
	Metadata                *FieldMetadata `json:"metadata,omitempty"`
	MiddleName              *string        `json:"middleName,omitempty"`
	PhoneticFamilyName      *string        `json:"phoneticFamilyName,omitempty"`
	PhoneticFullName        *string        `json:"phoneticFullName,omitempty"`
	PhoneticGivenName       *string        `json:"phoneticGivenName,omitempty"`
	PhoneticHonorificPrefix *string        `json:"phoneticHonorificPrefix,omitempty"`
	PhoneticHonorificSuffix *string        `json:"phoneticHonorificSuffix,omitempty"`
	PhoneticMiddleName      *string        `json:"phoneticMiddleName,omitempty"`
	UnstructuredName        *string        `json:"unstructuredName,omitempty"`
}
