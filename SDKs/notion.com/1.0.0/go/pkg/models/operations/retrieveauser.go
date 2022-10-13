package operations

type RetrieveAUserPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveAUserRequest struct {
	PathParams RetrieveAUserPathParams
}

type RetrieveAUser200ApplicationJSONPerson struct {
	Email *string `json:"email"`
}

type RetrieveAUser200ApplicationJSON struct {
	AvatarURL *interface{}                           `json:"avatar_url"`
	ID        *string                                `json:"id"`
	Name      *string                                `json:"name"`
	Object    *string                                `json:"object"`
	Person    *RetrieveAUser200ApplicationJSONPerson `json:"person"`
	Type      *string                                `json:"type"`
}

type RetrieveAUserResponse struct {
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	RetrieveAUser200ApplicationJSONObject *RetrieveAUser200ApplicationJSON
}
