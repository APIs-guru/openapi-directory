package operations

type GetAPIArticlesMediaTypeExtensionMediaTypeExtensionEnum string

const (
	GetAPIArticlesMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetAPIArticlesMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)

type GetAPIArticlesMediaTypeExtensionPathParams struct {
	MediaTypeExtension GetAPIArticlesMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
}

type GetAPIArticlesMediaTypeExtensionRequest struct {
	PathParams GetAPIArticlesMediaTypeExtensionPathParams
}

type GetAPIArticlesMediaTypeExtensionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
