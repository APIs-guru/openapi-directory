package shared

type ObParty2Address struct {
	AddressLine        []string               `json:"AddressLine"`
	AddressType        *ObAddressTypeCodeEnum `json:"AddressType"`
	BuildingNumber     *string                `json:"BuildingNumber"`
	Country            string                 `json:"Country"`
	CountrySubDivision *string                `json:"CountrySubDivision"`
	PostCode           *string                `json:"PostCode"`
	StreetName         *string                `json:"StreetName"`
	TownName           *string                `json:"TownName"`
}

type ObParty2 struct {
	AccountRole         *string                       `json:"AccountRole"`
	Address             []ObParty2Address             `json:"Address"`
	BeneficialOwnership *bool                         `json:"BeneficialOwnership"`
	EmailAddress        *string                       `json:"EmailAddress"`
	FullLegalName       *string                       `json:"FullLegalName"`
	LegalStructure      *string                       `json:"LegalStructure"`
	Mobile              *string                       `json:"Mobile"`
	Name                *string                       `json:"Name"`
	PartyID             string                        `json:"PartyId"`
	PartyNumber         *string                       `json:"PartyNumber"`
	PartyType           *ObExternalPartyType1CodeEnum `json:"PartyType"`
	Phone               *string                       `json:"Phone"`
	Relationships       *ObPartyRelationships1        `json:"Relationships"`
}
