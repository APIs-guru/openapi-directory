package operations




type GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetGlossaryPageNameMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    PageName string `pathParam:"style=simple,explode=false,name=pageName"`
    
}

type GetGlossaryPageNameMediaTypeExtensionRequest struct {
    PathParams GetGlossaryPageNameMediaTypeExtensionPathParams 
    
}

type GetGlossaryPageNameMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

