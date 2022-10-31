package shared



type Precinct struct {
    AdministrationRegionID *string `json:"administrationRegionId,omitempty"`
    ContestID []string `json:"contestId,omitempty"`
    DatasetID *string `json:"datasetId,omitempty"`
    EarlyVoteSiteID []string `json:"earlyVoteSiteId,omitempty"`
    ElectoralDistrictID []string `json:"electoralDistrictId,omitempty"`
    ID *string `json:"id,omitempty"`
    MailOnly *bool `json:"mailOnly,omitempty"`
    Name *string `json:"name,omitempty"`
    Number *string `json:"number,omitempty"`
    OcdID []string `json:"ocdId,omitempty"`
    PollingLocationID []string `json:"pollingLocationId,omitempty"`
    SpatialBoundaryID []string `json:"spatialBoundaryId,omitempty"`
    SplitName *string `json:"splitName,omitempty"`
    Ward *string `json:"ward,omitempty"`
    
}

