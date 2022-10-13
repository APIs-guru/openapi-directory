package shared

type Precinct struct {
	AdministrationRegionID *string  `json:"administrationRegionId"`
	ContestID              []string `json:"contestId"`
	DatasetID              *string  `json:"datasetId"`
	EarlyVoteSiteID        []string `json:"earlyVoteSiteId"`
	ElectoralDistrictID    []string `json:"electoralDistrictId"`
	ID                     *string  `json:"id"`
	MailOnly               *bool    `json:"mailOnly"`
	Name                   *string  `json:"name"`
	Number                 *string  `json:"number"`
	OcdID                  []string `json:"ocdId"`
	PollingLocationID      []string `json:"pollingLocationId"`
	SpatialBoundaryID      []string `json:"spatialBoundaryId"`
	SplitName              *string  `json:"splitName"`
	Ward                   *string  `json:"ward"`
}
