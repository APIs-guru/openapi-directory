package operations

type GetAPIBlogMediaTypeExtensionMediaTypeExtensionEnum string

const (
	GetAPIBlogMediaTypeExtensionMediaTypeExtensionEnumDotJSON GetAPIBlogMediaTypeExtensionMediaTypeExtensionEnum = ".json"
)

type GetAPIBlogMediaTypeExtensionPathParams struct {
	MediaTypeExtension GetAPIBlogMediaTypeExtensionMediaTypeExtensionEnum `pathParam:"style=simple,explode=false,name=mediaTypeExtension"`
}

type GetAPIBlogMediaTypeExtensionRequest struct {
	PathParams GetAPIBlogMediaTypeExtensionPathParams
}

type GetAPIBlogMediaTypeExtensionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
