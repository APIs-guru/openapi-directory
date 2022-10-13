package operations

type GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum string

const (
	GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)

type GetQuestionPageNameMediaTypeExtensionPathParams struct {
	MediaTypeExtension GetQuestionPageNameMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
	PageName           string                                                      `pathParam:"style=simple,explode=false,name=pageName"`
}

type GetQuestionPageNameMediaTypeExtensionRequest struct {
	PathParams GetQuestionPageNameMediaTypeExtensionPathParams
}

type GetQuestionPageNameMediaTypeExtensionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
