package shared

type Site struct {
	AccountID                     *string            `json:"accountId"`
	Approved                      *bool              `json:"approved"`
	DirectorySiteID               *string            `json:"directorySiteId"`
	DirectorySiteIDDimensionValue *DimensionValue    `json:"directorySiteIdDimensionValue"`
	ID                            *string            `json:"id"`
	IDDimensionValue              *DimensionValue    `json:"idDimensionValue"`
	KeyName                       *string            `json:"keyName"`
	Kind                          *string            `json:"kind"`
	Name                          *string            `json:"name"`
	SiteContacts                  []SiteContact      `json:"siteContacts"`
	SiteSettings                  *SiteSettings      `json:"siteSettings"`
	SubaccountID                  *string            `json:"subaccountId"`
	VideoSettings                 *SiteVideoSettings `json:"videoSettings"`
}
