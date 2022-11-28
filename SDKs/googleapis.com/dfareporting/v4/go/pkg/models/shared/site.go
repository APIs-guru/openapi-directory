package shared

// Site
// Contains properties of a site.
type Site struct {
	AccountID                     *string            `json:"accountId,omitempty"`
	Approved                      *bool              `json:"approved,omitempty"`
	DirectorySiteID               *string            `json:"directorySiteId,omitempty"`
	DirectorySiteIDDimensionValue *DimensionValue    `json:"directorySiteIdDimensionValue,omitempty"`
	ID                            *string            `json:"id,omitempty"`
	IDDimensionValue              *DimensionValue    `json:"idDimensionValue,omitempty"`
	KeyName                       *string            `json:"keyName,omitempty"`
	Kind                          *string            `json:"kind,omitempty"`
	Name                          *string            `json:"name,omitempty"`
	SiteContacts                  []SiteContact      `json:"siteContacts,omitempty"`
	SiteSettings                  *SiteSettings      `json:"siteSettings,omitempty"`
	SubaccountID                  *string            `json:"subaccountId,omitempty"`
	VideoSettings                 *SiteVideoSettings `json:"videoSettings,omitempty"`
}
