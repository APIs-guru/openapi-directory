package operations




type GetAPIQuestionsMediaTypeExtensionMediaTypeExtensionEnum string

const (
    GetAPIQuestionsMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetAPIQuestionsMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)


type GetAPIQuestionsMediaTypeExtensionPathParams struct {
    MediaTypeExtension GetAPIQuestionsMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
    
}

type GetAPIQuestionsMediaTypeExtensionRequest struct {
    PathParams GetAPIQuestionsMediaTypeExtensionPathParams 
    
}

type GetAPIQuestionsMediaTypeExtensionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

