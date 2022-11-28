package shared

type ShoppingAdsProgramStatusGlobalStateEnum string

const (
	ShoppingAdsProgramStatusGlobalStateEnumProgramStateUnspecified ShoppingAdsProgramStatusGlobalStateEnum = "PROGRAM_STATE_UNSPECIFIED"
	ShoppingAdsProgramStatusGlobalStateEnumNotEnabled              ShoppingAdsProgramStatusGlobalStateEnum = "NOT_ENABLED"
	ShoppingAdsProgramStatusGlobalStateEnumNoOffersUploaded        ShoppingAdsProgramStatusGlobalStateEnum = "NO_OFFERS_UPLOADED"
	ShoppingAdsProgramStatusGlobalStateEnumEnabled                 ShoppingAdsProgramStatusGlobalStateEnum = "ENABLED"
)

// ShoppingAdsProgramStatus
// Response message for GetShoppingAdsProgramStatus.
type ShoppingAdsProgramStatus struct {
	GlobalState    *ShoppingAdsProgramStatusGlobalStateEnum `json:"globalState,omitempty"`
	RegionStatuses []ShoppingAdsProgramStatusRegionStatus   `json:"regionStatuses,omitempty"`
}
