package operations



type RetrieveAUserPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type RetrieveAUserRequest struct {
    PathParams RetrieveAUserPathParams 
    
}

type RetrieveAUser200ApplicationJSONPerson struct {
    Email *string `json:"email,omitempty"`
    
}

type RetrieveAUser200ApplicationJSON struct {
    AvatarURL *interface{} `json:"avatar_url,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Object *string `json:"object,omitempty"`
    Person *RetrieveAUser200ApplicationJSONPerson `json:"person,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveAUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    RetrieveAUser200ApplicationJSONObject *RetrieveAUser200ApplicationJSON 
    
}

