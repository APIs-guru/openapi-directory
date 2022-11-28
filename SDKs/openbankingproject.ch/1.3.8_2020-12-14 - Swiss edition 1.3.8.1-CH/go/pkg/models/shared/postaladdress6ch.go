package shared

// PostalAddress6Ch
// as in ISO pain.001.001.03.ch.02 PostalAddress6
// If possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.
// as in ISO pain.001.001.03.ch.02 PostalAddress6-CH
type PostalAddress6Ch struct {
	AddressLine1   *string `json:"addressLine1,omitempty"`
	AddressLine2   *string `json:"addressLine2,omitempty"`
	BuildingNumber *string `json:"buildingNumber,omitempty"`
	Country        *string `json:"country,omitempty"`
	PostCode       *string `json:"postCode,omitempty"`
	StreetName     *string `json:"streetName,omitempty"`
	TownName       *string `json:"townName,omitempty"`
}
