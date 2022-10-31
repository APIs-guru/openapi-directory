package operations

type DeleteRealmClientsIDRolesRoleNamePathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type DeleteRealmClientsIDRolesRoleNameRequest struct {
	PathParams DeleteRealmClientsIDRolesRoleNamePathParams
}

type DeleteRealmClientsIDRolesRoleNameResponse struct {
	ContentType string
	StatusCode  int64
}
