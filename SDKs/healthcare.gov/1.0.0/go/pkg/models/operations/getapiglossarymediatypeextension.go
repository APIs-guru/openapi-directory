package operations




type GetAPIGlossaryMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetAPIGlossaryMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetAPIGlossaryMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetAPIGlossaryMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetAPIGlossaryMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    
}

type GetAPIGlossaryMediaTypeExtensionRequest struct {
    PathParams GetAPIGlossaryMediaTypeExtensionPathParams 
    
}

type GetAPIGlossaryMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

