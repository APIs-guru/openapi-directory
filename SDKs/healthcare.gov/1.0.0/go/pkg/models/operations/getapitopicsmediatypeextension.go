package operations




type GetAPITopicsMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetAPITopicsMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetAPITopicsMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetAPITopicsMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetAPITopicsMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    
}

type GetAPITopicsMediaTypeExtensionRequest struct {
    PathParams GetAPITopicsMediaTypeExtensionPathParams 
    
}

type GetAPITopicsMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

