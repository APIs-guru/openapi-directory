package operations




type GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetEsGlossaryPageNameMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetEsGlossaryPageNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    PageName string `pathParam:"style=simple,explode=false,name=pageName"`
    
}

type GetEsGlossaryPageNameMediaTypeExtensionRequest struct {
    PathParams GetEsGlossaryPageNameMediaTypeExtensionPathParams 
    
}

type GetEsGlossaryPageNameMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

