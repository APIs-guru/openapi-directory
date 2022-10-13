package shared

type Name struct {
	DisplayName             *string        `json:"displayName"`
	DisplayNameLastFirst    *string        `json:"displayNameLastFirst"`
	FamilyName              *string        `json:"familyName"`
	GivenName               *string        `json:"givenName"`
	HonorificPrefix         *string        `json:"honorificPrefix"`
	HonorificSuffix         *string        `json:"honorificSuffix"`
	Metadata                *FieldMetadata `json:"metadata"`
	MiddleName              *string        `json:"middleName"`
	PhoneticFamilyName      *string        `json:"phoneticFamilyName"`
	PhoneticFullName        *string        `json:"phoneticFullName"`
	PhoneticGivenName       *string        `json:"phoneticGivenName"`
	PhoneticHonorificPrefix *string        `json:"phoneticHonorificPrefix"`
	PhoneticHonorificSuffix *string        `json:"phoneticHonorificSuffix"`
	PhoneticMiddleName      *string        `json:"phoneticMiddleName"`
	UnstructuredName        *string        `json:"unstructuredName"`
}
