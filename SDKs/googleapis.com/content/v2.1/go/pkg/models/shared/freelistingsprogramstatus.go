package shared

type FreeListingsProgramStatusGlobalStateEnum string

const (
	FreeListingsProgramStatusGlobalStateEnumProgramStateUnspecified FreeListingsProgramStatusGlobalStateEnum = "PROGRAM_STATE_UNSPECIFIED"
	FreeListingsProgramStatusGlobalStateEnumNotEnabled              FreeListingsProgramStatusGlobalStateEnum = "NOT_ENABLED"
	FreeListingsProgramStatusGlobalStateEnumNoOffersUploaded        FreeListingsProgramStatusGlobalStateEnum = "NO_OFFERS_UPLOADED"
	FreeListingsProgramStatusGlobalStateEnumEnabled                 FreeListingsProgramStatusGlobalStateEnum = "ENABLED"
)

type FreeListingsProgramStatus struct {
	GlobalState    *FreeListingsProgramStatusGlobalStateEnum `json:"globalState,omitempty"`
	RegionStatuses []FreeListingsProgramStatusRegionStatus   `json:"regionStatuses,omitempty"`
}
