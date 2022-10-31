package operations

type PutRealmUsersIDExecuteActionsEmailPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmUsersIDExecuteActionsEmailQueryParams struct {
	ClientID    *string `queryParam:"style=form,explode=true,name=client_id"`
	Lifespan    *int32  `queryParam:"style=form,explode=true,name=lifespan"`
	RedirectURI *string `queryParam:"style=form,explode=true,name=redirect_uri"`
}

type PutRealmUsersIDExecuteActionsEmailRequest struct {
	PathParams  PutRealmUsersIDExecuteActionsEmailPathParams
	QueryParams PutRealmUsersIDExecuteActionsEmailQueryParams
	Request     []string `request:"mediaType=application/json"`
}

type PutRealmUsersIDExecuteActionsEmailResponse struct {
	ContentType string
	StatusCode  int64
}
