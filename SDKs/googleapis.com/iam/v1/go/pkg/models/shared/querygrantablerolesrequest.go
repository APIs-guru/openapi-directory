package shared

type QueryGrantableRolesRequestViewEnum string

const (
	QueryGrantableRolesRequestViewEnumBasic QueryGrantableRolesRequestViewEnum = "BASIC"
	QueryGrantableRolesRequestViewEnumFull  QueryGrantableRolesRequestViewEnum = "FULL"
)

type QueryGrantableRolesRequest struct {
	FullResourceName *string                             `json:"fullResourceName"`
	PageSize         *int32                              `json:"pageSize"`
	PageToken        *string                             `json:"pageToken"`
	View             *QueryGrantableRolesRequestViewEnum `json:"view"`
}
