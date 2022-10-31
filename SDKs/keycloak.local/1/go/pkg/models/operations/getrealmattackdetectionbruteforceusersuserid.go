package operations

type GetRealmAttackDetectionBruteForceUsersUserIDPathParams struct {
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetRealmAttackDetectionBruteForceUsersUserIDRequest struct {
	PathParams GetRealmAttackDetectionBruteForceUsersUserIDPathParams
}

type GetRealmAttackDetectionBruteForceUsersUserIDResponse struct {
	ContentType                                                          string
	GetRealmAttackDetectionBruteForceUsersUserID2XxApplicationJSONObject map[string]interface{}
	StatusCode                                                           int64
}
