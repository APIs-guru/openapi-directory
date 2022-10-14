package shared

type QueryGrantableRolesRequestViewEnum string

const (
	QueryGrantableRolesRequestViewEnumBasic QueryGrantableRolesRequestViewEnum = "BASIC"
	QueryGrantableRolesRequestViewEnumFull  QueryGrantableRolesRequestViewEnum = "FULL"
)

type QueryGrantableRolesRequest struct {
	FullResourceName *string                             `json:"fullResourceName,omitempty"`
	PageSize         *int32                              `json:"pageSize,omitempty"`
	PageToken        *string                             `json:"pageToken,omitempty"`
	View             *QueryGrantableRolesRequestViewEnum `json:"view,omitempty"`
}
