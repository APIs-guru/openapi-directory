package operations




type GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetEsQuestionPageNameMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetEsQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    PageName string `pathParam:"style=simple,explode=false,name=pageName"`
    
}

type GetEsQuestionPageNameMediaTypeExtensionRequest struct {
    PathParams GetEsQuestionPageNameMediaTypeExtensionPathParams 
    
}

type GetEsQuestionPageNameMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

