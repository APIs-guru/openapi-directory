package operations




type GetPageNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetPageNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetPageNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetPageNameMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetPageNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    PageName string `pathParam:"style=simple,explode=false,name=pageName"`
    
}

type GetPageNameMediaTypeExtensionRequest struct {
    PathParams GetPageNameMediaTypeExtensionPathParams 
    
}

type GetPageNameMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

