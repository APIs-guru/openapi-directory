package operations




type GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetEsBlogPageNameMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetEsBlogPageNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    PageName string `pathParam:"style=simple,explode=false,name=pageName"`
    
}

type GetEsBlogPageNameMediaTypeExtensionRequest struct {
    PathParams GetEsBlogPageNameMediaTypeExtensionPathParams 
    
}

type GetEsBlogPageNameMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

