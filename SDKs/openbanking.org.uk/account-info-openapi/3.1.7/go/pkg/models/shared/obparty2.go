package shared

type ObParty2Address struct {
	AddressLine        []string               `json:"AddressLine,omitempty"`
	AddressType        *ObAddressTypeCodeEnum `json:"AddressType,omitempty"`
	BuildingNumber     *string                `json:"BuildingNumber,omitempty"`
	Country            string                 `json:"Country"`
	CountrySubDivision *string                `json:"CountrySubDivision,omitempty"`
	PostCode           *string                `json:"PostCode,omitempty"`
	StreetName         *string                `json:"StreetName,omitempty"`
	TownName           *string                `json:"TownName,omitempty"`
}

type ObParty2 struct {
	AccountRole         *string                       `json:"AccountRole,omitempty"`
	Address             []ObParty2Address             `json:"Address,omitempty"`
	BeneficialOwnership *bool                         `json:"BeneficialOwnership,omitempty"`
	EmailAddress        *string                       `json:"EmailAddress,omitempty"`
	FullLegalName       *string                       `json:"FullLegalName,omitempty"`
	LegalStructure      *string                       `json:"LegalStructure,omitempty"`
	Mobile              *string                       `json:"Mobile,omitempty"`
	Name                *string                       `json:"Name,omitempty"`
	PartyID             string                        `json:"PartyId"`
	PartyNumber         *string                       `json:"PartyNumber,omitempty"`
	PartyType           *ObExternalPartyType1CodeEnum `json:"PartyType,omitempty"`
	Phone               *string                       `json:"Phone,omitempty"`
	Relationships       *ObPartyRelationships1        `json:"Relationships,omitempty"`
}
