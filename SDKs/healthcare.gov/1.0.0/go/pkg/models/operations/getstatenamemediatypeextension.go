package operations




type GetStateNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetStateNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetStateNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetStateNameMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetStateNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    StateName string `pathParam:"style=simple,explode=false,name=stateName"`
    
}

type GetStateNameMediaTypeExtensionRequest struct {
    PathParams GetStateNameMediaTypeExtensionPathParams 
    
}

type GetStateNameMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

