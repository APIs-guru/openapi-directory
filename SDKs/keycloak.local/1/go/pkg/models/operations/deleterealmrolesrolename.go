package operations

type DeleteRealmRolesRoleNamePathParams struct {
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type DeleteRealmRolesRoleNameRequest struct {
	PathParams DeleteRealmRolesRoleNamePathParams
}

type DeleteRealmRolesRoleNameResponse struct {
	ContentType string
	StatusCode  int64
}
