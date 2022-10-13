package operations

type PutRealmUsersIDSendVerifyEmailPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmUsersIDSendVerifyEmailQueryParams struct {
	ClientID    *string `queryParam:"style=form,explode=true,name=client_id"`
	RedirectURI *string `queryParam:"style=form,explode=true,name=redirect_uri"`
}

type PutRealmUsersIDSendVerifyEmailRequest struct {
	PathParams  PutRealmUsersIDSendVerifyEmailPathParams
	QueryParams PutRealmUsersIDSendVerifyEmailQueryParams
}

type PutRealmUsersIDSendVerifyEmailResponse struct {
	ContentType string
	StatusCode  int64
}
