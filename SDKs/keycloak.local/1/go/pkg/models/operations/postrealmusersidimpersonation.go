package operations

type PostRealmUsersIDImpersonationPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmUsersIDImpersonationRequest struct {
	PathParams PostRealmUsersIDImpersonationPathParams
}

type PostRealmUsersIDImpersonationResponse struct {
	ContentType                                           string
	PostRealmUsersIDImpersonation2XxApplicationJSONObject map[string]interface{}
	StatusCode                                            int64
}
